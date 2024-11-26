$(document).ready(function () {
    $('#botao').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $.ajax(endpoint).done(function (resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const erro = resposta.erro;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

            if (erro === 'true') {
                alert('CEP não encontrado!');
            } else {
                $('#endereco').val(endereco);
            }
        })

    })
})