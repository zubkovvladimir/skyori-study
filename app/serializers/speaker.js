import ApplicationSerializer from './application';

export default class SpeakerSerializer extends ApplicationSerializer {
    normalize(hash) {
        hash = super.normalize(...arguments);
        let hashCopy = Object.assign({}, hash);
        hashCopy.attributes = {};
        hashCopy.attributes.photo = hashCopy.photo;
        hashCopy.attributes.firstName = hashCopy.firstName;
        hashCopy.attributes.lastName = hashCopy.lastName;
        hashCopy.attributes.patronymic = hashCopy.patronymic;
        delete hashCopy.photo;
        delete hashCopy.firstName;
        delete hashCopy.lastName;
        delete hashCopy.patronymic;
        hash = {
            data: hashCopy
        };

        return hash;
    }
}
