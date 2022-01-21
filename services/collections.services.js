import {getClient} from '../db';

const db = getClient();

db.createCollection("nominations");

