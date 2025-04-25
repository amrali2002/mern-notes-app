import Note from "../models/Note.js";

export const getNotes = async(req, res) => {
try {
  const notes = await Note.find();
res.status(200).json({
    success: true,
    data: notes,
  });
})
} catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
  
}};



export const getNote =  async(req, res) => {
try {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }       
res.status(200).json({
    success: true,
    data: note,
  });   
} catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  success: false ,
  data: note,
 
}} ;



     export const createNote = async(req, res) => { 
      try {
        const { userId, title, content, color } = req.body;
        const note = new Note({
          userId,
          title,
          content,
          color,
        });
        await note.save();
        res.status(201).json({
          success: true,
          data: note,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });              
        
      }
     };


export const updateNote =async (req, res) => {

try {
const note = await Note.findByIdAndUpdate(req.params.id);
if (!note) {
  return res.status(404).json({ message: "Note not found" }); 

const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators: true,
}); 

res.status(200).json({
  success: true,
  data: updatedNote,
});

} catch (error) {
  console.log(error);
  res.status(500).json({ message: "server error" });
  success: false,
  data: note,
}
};      

export const deleteNote = async (req, res) => {   
try {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
  });           
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "server error" });
  success: false,
  data: note,
  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
  });
  
}


} ;       

