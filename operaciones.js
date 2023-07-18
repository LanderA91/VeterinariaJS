import { readFile, writeFile } from "node:fs/promises";


export const registrar = async (nombre, edad, animal, color, enfermedad) => {
    
    try {
      
        const citas = JSON.parse(await readFile("citas.json"));
       
        const cita = {
            nombre,
            edad,
            animal,
            color,
            enfermedad
        }
      
        citas.push(cita)
    
        await writeFile("citas.json", JSON.stringify(citas))
     
        console.log(citas)
    } catch (error) {
        console.log(error)
    }
    }
    
    export const leer = async () => {
        try {
         
            const citas = JSON.parse(await readFile("citas.json"));
            console.log(citas)   
        } catch (error) {
            console.log(error) 
        }
    }
    