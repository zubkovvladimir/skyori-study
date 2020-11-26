import ApplicationSerializer from './application';

export default class BookSerializer extends ApplicationSerializer {
    normalize(hash) {
        hash = super.normalize(...arguments);
        let hashCopy = Object.assign({}, hash);
        hashCopy.attributes = {};
        hashCopy.attributes.name = hashCopy.name;
        hashCopy.attributes.author = hashCopy.author;
        hashCopy.attributes.features = {};
        hashCopy.attributes.features.number = hashCopy.features.number;
        hashCopy.attributes.features.rate = hashCopy.features.rate;
        hashCopy.attributes.features.tags = hashCopy.features.tags;
        hashCopy.attributes.features.cover = hashCopy.features.cover;
        hashCopy.attributes.features.description = hashCopy.features.description;
        delete hashCopy.name;
        delete hashCopy.author;
        delete hashCopy.features.number;
        delete hashCopy.features.rate;
        delete hashCopy.features.tags;
        delete hashCopy.features.cover;
        delete hashCopy.features.description;
        hash = {
            data: hashCopy
        };

        return hash;
    }
}
