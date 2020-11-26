import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
    normalize(model, hash) {
        hash.type = model.modelName;
        return hash;
    }
}
