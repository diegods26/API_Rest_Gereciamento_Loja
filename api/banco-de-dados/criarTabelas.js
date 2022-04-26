const ModeloTabelas = require ('../rotas/fornecedores/ModeloTabelaFornecedor')


ModeloTabelas
    .sync()
    .then(() => console.log('Tabela criada com sucesso!'))
    .catch(console.log)