import ApplicationSerializer from './application';

export default class BookSerializer extends ApplicationSerializer {
    normalize(hash) {
        hash = super.normalize(...arguments);
        let hashCopy = Object.assign({}, hash);
        hashCopy.attributes = {};
        hashCopy.attributes.name = hashCopy.name;
        hashCopy.attributes.number = hashCopy.number;
        hashCopy.attributes.rate = hashCopy.rate;
        hashCopy.attributes.tags = hashCopy.tags;
        hashCopy.attributes.cover = hashCopy.cover;
        hashCopy.attributes.description = hashCopy.description;
        hashCopy.attributes.firstName = hashCopy.firstName;
        hashCopy.attributes.lastName = hashCopy.lastName;
        delete hashCopy.name;
        hash = {
            data: hashCopy
        };

        return hash;
    }
}
