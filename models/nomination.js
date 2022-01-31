const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NomineeSchema = new Schema({
    type            : {
      type: String,
      enum: ['', 'nominee', 'partner'],
    },
    firstname       : String,
    lastname        : String,
    organization    : String
});

const NominatorSchema = new Schema({
    firstname       : String,
    lastname        : String,
    title           : String,
    email           : String
});

const LocationSchema = new Schema({
    address         : String,
    city            : String
});

const AttachmentSchema = new Schema({
    file            : Object,
    label           : String,
    description     : String
});

const NominationSchema = new Schema(
  {
    category: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    guid: {
      type: String,
      required: true
    },
    submitted: {
      type: Boolean,
      required: true
    },
    organization: {
      type: String,
      required: function() { return this.submitted }
    },
    title: {
      type: String,
      required: function() { return this.submitted }
    },
    nominees: [NomineeSchema],
    contacts: {
      primary: {
        firstname: String,
        lastname: String,
        email: String,
        phone: String
      },
      video: {
        firstname: String,
        lastname: String,
        email: String,
        locations: [LocationSchema]
      }
    },
    nominators: [NominatorSchema],
    acknowledgment: {
      type: String,
      enum: ['accepted', 'not_accepted'],
      required: function() { return this.submitted }
    },
    evaluation: {
      summary: String,
      context: String,
      complexity: String,
      approach: String,
      valuing_people: String,
      commitment: String,
      contribution: String,
      impact: String
    },
    attachments: [AttachmentSchema]
  },
  { timestamps: true }
);



const NominationModel = mongoose.model('nominations', NominationSchema);

module.exports = NominationModel;
