import { getModelForClass, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export class CHANGEME extends TimeStamps  {


}

const CHANGEMEmodel = getModelForClass(CHANGEME);

