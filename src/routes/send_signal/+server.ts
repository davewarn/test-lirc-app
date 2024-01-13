import type { RequestHandler } from './$types';
import * as lirc_node from 'lirc_node';

// NOTE: This code executes on the server

export const POST: RequestHandler = async (event) => {

    try {

        console.log('Calling lirc_node init...');
        lirc_node.init();

        console.log('Init call finished.');
        console.log('Remotes:', lirc_node.remotes);

    } catch (error) {
        console.error('Error calling lirc_node init:', error);
    }

    try {

        console.log('Attempting to send signal...');
        lirc_node.irsend.send_once("tv", "power", function() {
            console.log("Sent TV power command!");
        });
        
    } catch (error) {
        console.error('Error sending signal.', error);
    }

    // console.log('Attempting to add listener...');
    // lirc_node.addListener(function(data) {
    //     console.log('Received data:', data);
    // });

    return new Response();
};
