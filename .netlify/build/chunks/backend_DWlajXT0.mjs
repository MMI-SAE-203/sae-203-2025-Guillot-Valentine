import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

async function allFilm() {
    let records = await pb.collection('film').getFullList({sort: 'date' });
    records = records.map((film) => {
            film.img = pb.files.getURL(film, film.affiche);
            return film;
        });
    return records;
}

async function oneFilm(id) {
    let records = await pb.collection('film').getOne(id, {expand: 'invite'});
    return records;
}

async function allActivite() {
    const records = await pb.collection('activite').getFullList({sort: 'date' });
    return records;
}

async function oneActivite(id) {
    const records = await pb.collection('activite').getOne(id, {expand: 'invite'});
    return records;
}

async function allInvite() {
    let records = await pb.collection('invite').getFullList({sort: 'nom' });
    records = records.map((invite) => {
            invite.img = pb.files.getURL(invite, invite.photo);
            return invite;
        });
    return records;
}

async function oneInvite(id) {
    let records = await pb.collection('invite').getOne(id);
    return records;
}

async function allActiviteByInviteId(id) {
    const records = await pb.collection('activite').getFullList({
        filter: `invite.id = '${id}' `,
        expand: 'invite',
    });
    return records;
}

async function createFilm(data) {
    try {
        await pb.collection('film').create(data);
        return {
            success: true,
            message: 'Film ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant le film', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant le film'
        };
    }
}

async function createActivites(data) {
    try {
        await pb.collection('activite').create(data);
        return {
            success: true,
            message: 'Activité ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant l activité', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant l activité'
        };
    }
}

async function createInvite(data) {
    try {
        await pb.collection('invite').create(data);
        return {
            success: true,
            message: 'Invité ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant l invité', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant l invité'
        };
    }
}

async function allFilmByInviteId(id) {
    const records = await pb.collection('film').getFullList({
        filter: `invite.id = '${id}' `,
        expand: 'invite',
    });
    return records;
}

async function getFilmsByGenre(genre) {
    let prix = await pb.collection('film').getFullList({
        filter: `genre=== ${genre}` ,
    });
    return prix;
}

export { allFilmByInviteId as a, allActiviteByInviteId as b, createInvite as c, allInvite as d, createActivites as e, oneActivite as f, allActivite as g, createFilm as h, getFilmsByGenre as i, oneFilm as j, allFilm as k, oneInvite as o, pb as p };
