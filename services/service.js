const db = require('./db');
const helper = require('../helper');  

//config.js has your database configuration info
const config = require('../config');

async function getAllStudents(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM hisdnutritionalservices.studententrydata LIMIT ${offset},${config.listPerPage}`
  );

  //helper.js wires up paging to allow for partial fetches
  ////http://localhost:4050/hisdnutritionalservices?page=2
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getSchoolListings(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM hisdnutritionalservices.schoollisting LIMIT ${offset},${config.listPerPage}`
  );


  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function gettblfoodstobeommited(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM hisdnutritionalservices.tblfoodstobeommited LIMIT ${offset},${config.listPerPage}`
  );

 
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getttblmilksub(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM hisdnutritionalservices.tblmilksub LIMIT ${offset},${config.listPerPage}`
  );

 
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function gettblsupplementname(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM hisdnutritionalservices.tblsupplementname LIMIT ${offset},${config.listPerPage}`
  );

 
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}


async function getttbltrainingtype(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM hisdnutritionalservices.tbltrainingtype LIMIT ${offset},${config.listPerPage}`
  );

 
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function gettnotes(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM hisdnutritionalservices.notes LIMIT ${offset},${config.listPerPage}`
  );


  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

/*
async function create(newRec){
  const result = await db.query(
    `INSERT INTO programming_languages 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    (${"'" + newRec.name +"'"}, ${newRec.released_year}, ${newRec.githut_rank}, ${newRec.pypl_rank}, ${newRec.tiobe_rank})`
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return {message};
}

async function update(id, newRec){
  const result = await db.query(
    `UPDATE programming_languages 
    SET name="${newRec.name}", released_year=${newRec.released_year}, githut_rank=${newRec.githut_rank}, 
    pypl_rank=${newRec.pypl_rank}, tiobe_rank=${newRec.tiobe_rank} 
    WHERE id=${id}` 
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=${id}`
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return {message};
}


module.exports = {
  getMultiple,
  create,
  update,
  remove
}
*/
module.exports = {
    getAllStudents,
    getSchoolListings,
    gettblfoodstobeommited,
    getttblmilksub,
    gettblsupplementname,
    getttbltrainingtype,
    gettnotes
  }