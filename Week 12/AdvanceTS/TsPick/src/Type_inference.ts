// Type inference
// You can extract the TypeScript type of any schema with z.infer<typeof mySchema> .

// const A = z.string();
// type A = z.infer<typeof A>; // string

// const u: A = 12; // TypeError
// const u: A = "asdf"; // compiles


// in node js using zod.........................................................................................................................................
// import { z } from 'zod';
// import express from "express";

// const app = express();

// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody = req.body; // how to assign a type to updateBody?

//   if (!success) {
//     res.status(411).json({});
//     return
//   }
//   // update database here
//   res.json({
//     message: "User updated"
//   })
// });

// app.listen(3000);

//..........................................................................................................................................................................................................
// What about transforms?

// In reality each Zod schema internally tracks two types: an input and an output. For most schemas (e.g. z.string()) these two are the same. But once you add transforms into the mix, these two values can diverge. For instance z.string().transform(val => val.length) has an input of string and an output of number.

// You can separately extract the input and output types like so:

// const stringToNumber = z.string().transform((val) => val.length);

// // ⚠️ Important: z.infer returns the OUTPUT type!
// type input = z.input<typeof stringToNumber>; // string
// type output = z.output<typeof stringToNumber>; // number

// // equivalent to z.output!
// type inferred = z.infer<typeof stringToNumber>; // number