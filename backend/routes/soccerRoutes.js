import {
    addNewPlayer,
    deletePlayer,
    getPlayerWithId,
    getPlayers,
    updatePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/players')
        // GET endpoint
        .get(getPlayers)
        // POST endpoint
        .post(addNewPlayer)
    app.route('/player/:PlayerId')
        .get(getPlayerWithId)
        .put(updatePlayer)
        .delete(deletePlayer)
}

export default routes