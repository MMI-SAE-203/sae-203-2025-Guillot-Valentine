import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function allFilm() {
    let records = await pb.collection('film').getFullList({sort: 'date' });
    records = records.map((film) => {
            film.img = pb.files.getURL(film, film.affiche);
            return film;
        });
    return records;
}

export async function oneFilm(id) {
    const records = await pb.collection('film').getOne(id);
    return records;
}

export async function allActivite() {
    const records = await pb.collection('activite').getFullList({sort: 'date' });
    return records;
}

export async function oneActivite(id) {
    const records = await pb.collection('activite').getOne(id);
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
    records = records.map((invite) => {
            invite.img = pb.files.getURL(invite, invite.photo);
            return invite;
        });
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