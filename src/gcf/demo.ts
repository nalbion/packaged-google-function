import Datastore from '@google-cloud/datastore'

export function helloWorld(req, res) {
    try {
        const datastore = new Datastore({projectId: 'demo'});
        if (datastore) {
            console.info('loaded datastore')
        } else {
            return res.status(500).send('Failed to load datastore');
        }
    } catch (err) {
        console.info(err);
        return res.status(500).send('Error loading datastore');
    }

    // Example input: {"message": "Hello!"}
    if (req == undefined) {
        console.info('No request, probably testing');
    } else if (req.body.message === undefined) {
        // This is an error case, as "message" is required.
        res.status(400).send('No message defined!');
    } else {
        // Everything is okay.
        console.log(req.body.message);
        res.status(200).send('Success: ' + req.body.message);
    }
}
