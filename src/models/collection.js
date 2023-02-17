'use strict';

class Collection{
  constructor(model){
    this.model = model;
  }

  async create(json){
    try {
      const record = await this.model.create(json);
      return record;
    } catch(e){
      console.error('error in the collection');
      return e;
    }
  }

  async read(id = null) {
    try {

      if (!id) {
        const records = await this.model.findAll();
        return records;
      } else {
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      }
    } catch (e) {
      console.error('error in the collection');
      return e;
    }
  }


  async update(id, obj){
    try {
      if (!id) throw new Error('no record');
      const record = await this.model.findByPk(id);
      console.log('this is the record', record);
      let updated = await record.update(obj);
      console.log('this is the updated', updated);
      return updated;     
    } catch(e){
      console.error('error in the collection');
      return e;
    }
  }

  async delete(json){
    try {
      const record = await this.model.destroy(json);
      return record;
    } catch(e){
      console.error('error in the collection');
      return e;
    }
  }
}

module.exports = Collection;
