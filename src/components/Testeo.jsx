import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 10,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin:10,

}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Espacio de testeo </h1>
      <Grid container spacing={2}>
        
        <Grid item xs={6}>
          <Item><strong>Que funciono</strong>
              <br />
              1. Funciona que se cuenta con un buscador que facilita encontrará más rápidamente el producto que busco usando cualquier palabra asociada al producto
              <br />
              <br />
              2. Es bueno contar con fotografías de los productos
              <br />
              <br />
              3. Manejo de precios sobre el producto en relacion
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item><strong>Que se puede mejorar</strong>
              <br />
                1. No pude acceder a la página en mi celular
              <br />
              <br />
                2. No encontré datos de contacto no al inicio no al final de la página, de estaanera no es claro para mí si ese pet shop es de mi ciudad o como hacer contacto
              <br />
              <br />
                3. Si tocó sobre las fotos o sobre las etiquetas no se abre más información sobre cada producto como los gramos de cada paquete, para que tamaño o tipo de razas es cada producto
              <br />
              <br />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item><strong>Preguntas</strong>
              <br />
              1. ¿Se puede usar pagos por pse?
              <br />
              <br />
              2. ¿En caso de un cambio de prveedor se puede tener el codigo abierto al nuevo proveedor?
              <br />
              <br />
              3. ¿se puede cambiar el idioma de la pagina?
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item><strong>Ideas</strong>
          <br />
            1. poder tener acceso a las redes sociales
            <br />
            <br />
            2. tener el whatsapp vinculado a la pagina para dar respuesta oprotunas
          </Item>
            
        
        </Grid>
      </Grid>
    </Box>
  );
}