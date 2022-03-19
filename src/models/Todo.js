const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User=require('./User')
const TodoSchema = new Schema(
	{
		_id: { type: Schema.ObjectId, auto: true },
		body: { type: String, required: true },
		title: { type: String, required: true },
        date:{type:Date,required:true},
        userId: { type: Schema.ObjectId, ref: 'User', require: true },
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

const Todo = mongoose.model('Todo', TodoSchema,'Todos');

module.exports = Todo;
