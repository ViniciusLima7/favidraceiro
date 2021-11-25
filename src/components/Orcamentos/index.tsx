import { Button, Container, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { ContainerExterno, Formulario, Title } from './style';



function Orcamento(){

return (
    <ContainerExterno>
        {/* <br/> */}
        <Title id="orcamentos">Orçamento</Title>
        <Container component="article" maxWidth="sm">
            <Formulario method="POST"
                action="http://formmail.uni5.net/formmail.cgi"
            // Para não recarreagr a página quando enviar formulário.
                // onSubmit={(event) => {
                //     event.preventDefault();
                // }}        
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
                    	<input type="hidden" name="recipient" value="vinicius.lima_iasd@hotmail.com"/>
						{/* Pode ser qualquer endereço de email  que receba a mensagem  */}
						{/* <input type="hidden" name="redirect" value="http://daianievinicius.com.br/index.html"> */}
						{/* <!-- Após o envio, o usuário será redirecionado para a página configurada aqui --> */}
                        <input type="hidden" name="subject" value="Orçamento"/>
                            {/* <!-- Assunto da mensagem --> */}
						<input type="hidden" name="email" value="daianievinicius@hotmail.com"/>
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

                <Button type="submit" variant="contained" color="primary">
                         Enviar Orçamento
                </Button>
                <br/>
                <br/>
            </Formulario>
        </Container>
    </ContainerExterno>
);

}

export default Orcamento;