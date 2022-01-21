const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NomineeSchema = new Schema({
    type            : String,
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
    filename        : String,
    label           : String,
    description     : String,
    reference       : String
});

const NominationSchema = new Schema(
  {
    category: {
      type: String,
      required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    organization: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
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
    acknowledgment: String,
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
  });



const NominationModel = mongoose.model('nominations', NominationSchema);

module.exports = NominationModel;
