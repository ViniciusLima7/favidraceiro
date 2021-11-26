import { Button, Container, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { ContainerExterno, Formulario, Title } from './style';



function Orcamento(){

return (
    <ContainerExterno>
        {/* <br/> */}
        <Title id="orcamentos">Orçamento</Title>
        <Container className="w3_mail_grids" component="article" maxWidth="sm">
            <Formulario
                action="http://formmail.uni5.net/formmail.cgi"
                method="POST"
            // Para não recarreagr a página quando enviar formulário.
                // onSubmit={(event) => {
                //     event.preventDefault();
                // }}        
            >
            
            <div className="w3_agile_mail_grid">
                    
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
                     name="replyto"
                     label="E-mail"
                     type="email"
                     required
                     variant="outlined"
                     margin="normal"
                     fullWidth 
                     />
                {/* Quem vai receber o email? */}
                <input
                    type="hidden"
                    name="recipient"
                    value="vinicius.lima_iasd@hotmail.com"
                    />
                {/* Redirect, após o envio */}
                <input
                     type="hidden"
                     name="redirect"
                     value="http://localhost:3000/"
                />
                 {/* Assunto da mensagem */}
                <input type="hidden" name="subject" value="Solicitando Orcamento"/>
				<input type="hidden" name="email" value="vinicius.mhcl@gmail.com"/>
                {/* <!-- Deve ser uma conta de email ativa em seu domínio --></input> */}
                        
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

                <Button type="submit" variant="contained" color="primary" value="Enviar">
                         Enviar Orçamento
                </Button>
            </div>
                <br/>
                <br/>
            </Formulario>
        </Container>
    </ContainerExterno>
);

}

export default Orcamento;