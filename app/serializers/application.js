import JSONSerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONSerializer {
    normalize() {
        hash.type = model.modelName;
        return hash;
    }
}
