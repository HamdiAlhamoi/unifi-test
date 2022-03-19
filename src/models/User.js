const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		_id: { type: Schema.ObjectId, auto: true },
		name: { type: String, required: true },
		email: { type: String, unique: true, required: true, trim: true },
        password:{
			type: String,
			required: true,
			trim: true,
			select: true,
			set: (val) => (val ? bcrypt.hashSync(val, 10) : undefined),
		},
		updatedAt: { type: Date, select: false },
	},
	{
		timestamps: true,
		useNestedStrict: true,
		optimisticConcurrency: true,
		toObject: {
			virtuals: true,
			versionKey: false,
			transform: (_, ret) =>
				delete ret._id && delete ret.__t && delete ret.deleted && ret.id !== null
					? { id: ret.id, ...ret }
					: delete ret.id && ret,
		},
		toJSON: {
			virtuals: true,
			versionKey: false,
			transform: (_, ret) =>
				delete ret._id && delete ret.__t && delete ret.deleted && ret.id !== null
					? { id: ret.id, ...ret }
					: delete ret.id && ret,
		},
	}
);

const User = mongoose.model('User', UserSchema,'Users');

module.exports = User;
