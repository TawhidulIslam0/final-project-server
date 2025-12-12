/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const DEFAULT_IMAGE = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false, 
    validate: {
      notEmpty: true
    }
  },

  email: {
    type: Sequelize.STRING, 
    allowNull: false, 
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }, 

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,  
    defaultValue: DEFAULT_IMAGE,
    validate: {
      isURL: true
    }
  },

  gpa: {
    type: Sequelize.DECIMAL(2,1), 
    allowNull: true, 
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
}, {
  hooks: {
    beforeValidate: (student) => {
      if (!student.imageURL || student.imageURL.trim() === "") {
        student.imageURL = DEFAULT_IMAGE;
      }
    }
  }
});

// Export the student model
module.exports = Student;
