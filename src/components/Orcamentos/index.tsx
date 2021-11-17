import { Button, Container, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { ContainerExterno, Formulario, Title } from './style';



function Orcamento(){

return (
    <ContainerExterno>
        <br/>
        <Title id="orcamentos">Orçamento</Title>
        <Container component="article" maxWidth="sm">
            <Formulario
            // Para não recarreagr a página quando enviar formulário.
                onSubmit={(event) => {
                    event.preventDefault();
                }}        
            >
                 <TextField
                     id="nome"
                     name="nome"
                     label="Nome Completo"
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     required
                />
                 <TextField
                     id="email"
                     name="email"
                     label="E-mail"
                     type="email"
                     required
                     variant="outlined"
                     margin="normal"
                     fullWidth 
                 />

                  <TextField
                     helperText="Ex: (dd) xxxxx-xxxx"
                     id="celular"
                     name="celular"
                     label="Celular"
                     type="text"
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     required
                  />

                 <FormControlLabel
                     label="WhatsApp"
                     control={
                         <Switch
                         name="promocoes"
                         color="primary"
                         />
                     }
                />

                <TextField
                    id="assunto"
                    name="assunto"
                    label="Assunto"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
                
                <TextField
                    id="Mensagem"
                    name="Mensagem"
                    label="Mensagem"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    multiline
                    maxRows={10}   
                />

                <Button type="submit" variant="contained" color="primary">
                         Enviar Orçamento
                </Button>
            </Formulario>
        </Container>
    </ContainerExterno>
);

}

export default Orcamento;