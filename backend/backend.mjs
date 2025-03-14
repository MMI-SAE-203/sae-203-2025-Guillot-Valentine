import PocketBase from 'pocketbase';
const pb = new PocketBase('https://sae203.valentine-guillot.fr:443');

export async function allFilm() {
    let records = await pb.collection('film').getFullList({sort: 'date' });
    records = records.map((film) => {
            film.img = pb.files.getURL(film, film.affiche);
            return film;
        });
    return records;
}

export async function oneFilm(id) {
    let records = await pb.collection('film').getOne(id, {expand: 'invite'});
    return records;
}

export async function allActivite() {
    const records = await pb.collection('activite').getFullList({sort: 'date' });
    return records;
}

export async function oneActivite(id) {
    const records = await pb.collection('activite').getOne(id, {expand: 'invite'});
    return records;
}

export async function allInvite() {
    let records = await pb.collection('invite').getFullList({sort: 'nom' });
    records = records.map((invite) => {
            invite.img = pb.files.getURL(invite, invite.photo);
            return invite;
        });
    return records;
}

export async function oneInvite(id) {
    let records = await pb.collection('invite').getOne(id);
    return records;
}

export async function allActiviteByInviteId(id) {
    const records = await pb.collection('activite').getFullList({
        filter: `invite.id = '${id}' `,
        expand: 'invite',
    });
    return records;
}

export async function allActiviteByInviteNom(nom) {
    const records = await pb.collection('activite').getFullList({
        filter: `invite.nom = '${nom}' `,
        expand: 'invite',
    });
    return records;
}

export async function updateById(collectionName, id, data) {
    try {
        await pb.collection(collectionName).update(id, data);
    } catch (error) {
        
        await pb.collection(collectionName).create(data);
    }

}

export async function updateFilmById(id, data) {
    const record = await pb.collection('film').updateOne(id, data);
    return record;
}

export async function updateActivitesById(id, data) {
    const record = await pb.collection('activite').updateOne(id, data);
    return record;
}

export async function updateInviteById(id, data) {
    const record = await pb.collection('invite').updateOne(id, data);
    return record;
}

export async function createFilm(data) {
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

export async function createActivites(data) {
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

export async function createInvite(data) {
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

export async function allFilmByInviteId(id) {
    const records = await pb.collection('film').getFullList({
        filter: `invite.id = '${id}' `,
        expand: 'invite',
    });
    return records;
}

export async function getFilmsByGenre(genre) {
    let prix = await pb.collection('film').getFullList({
        filter: `genre=== ${genre}` ,
    });
    return prix;
}

// Exportation de l'instance PocketBase pour l'utiliser dans d'autres fichiers
export { pb };