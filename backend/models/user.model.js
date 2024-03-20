import mongoose from "mongoose"

// user schema
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			default: "", //
		},
		profileUrl: {
			type: String,
			required: true,
		},
		avatarUrl: {
			type: String,
		},
		likedProfiles: {
			type: [String],
			default: [],
		},
		likedBy: [
			{
				username: {
					type: String,
					required: true,
				},
				avatarUrl: {
					type: String,
				},
				likedDate: {
					type: Date,
					default: Date.now,
				},
			},
		],
	},
	{ timestamps: true }
);

// create User model using the userSchema
const User = mongoose.model("User", userSchema);

// ecport User model
export default User;