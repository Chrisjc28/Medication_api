const mongoose = require('mongoose');

var medicationSchema = mongoose.Schema ({
  medication: String
},{
  collection: 'medication'
});

module.exports = mongoose.model('Medication', medicationSchema);
