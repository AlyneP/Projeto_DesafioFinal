const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const criarBanco = async () => {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })

await db.exec(`
        
        CREATE TABLE IF NOT EXISTS desaparecidos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        idade INTEGER,
        cidade text,
        fisionomia TEXT,
        ultima_localizacao TEXT,
        data_desaparecimento TEXT,
        status TEXT DEFAULT 'Desaparecido'
        )
    `)

    console.log('Registro concluído.')

//Checagem

const checagem = await db.get(`SELECT COUNT(*) AS total FROM desaparecidos`)

if (checagem.total === 0) {
    await db.exec(`
        INSERT INTO desaparecidos (nome, idade, cidade, fisionomia, ultima_localizacao, data_desaparecimento) VALUES

        ('Alice Daflon', '25', 'Petrópolis', 'Cabelos castanhos longos, olhos castanhos, estatura média', 'Rua A, 123', '23-03-2026'),
        ('Carlos Souza', '52', 'Petrópolis', 'Calvo, barba grisalha, alto', 'Rua B, 125', '23-03-2026'),
        ('Ana Costa', '27', 'Petrópolis', 'Cabelos cacheados pretos, baixa estatura, magra ', 'Rua C, 91', '23-03-2026'),
        ('João Pereira', '41', 'Petrópolis', 'Moreno, cabelo curto, tatuagem no braço direito', 'Rua D, 423', '23-03-2026'),
        ('Fernanda Lima', '19', 'Petrópolis', 'Cabelos loiros, olhos claros, alta', 'Rua E, 147', '23-03-2026'),
        ('Roberto Alves', '60', 'Petrópolis', 'Cabelos grisalhos, usa óculos, estatura média', 'Rua F, 189', '23-03-2026'),
        ('Juliana Martins', '38', 'Petrópolis', 'Cabelos lisos pretos, magra, altura média', 'Rua G, 201', '23-03-2026')
        `)

        console.log('Dados iniciais inseridos')
    } else {
        console.log(`Banco já possui ${checagem.total} desaparecidos`)
    }

    //Atualizar status de desaparecido
    await db.run(`
        UPDATE desaparecidos
        SET status = 'Encontrado'
        WHERE nome = 'João Pereira'
        `)
        console.log('status atualizado para encontrado.')

    // Remover pessoa encontrada
    // await db.run(`DELETE FROM desaparecidos WHERE status = 'Encontrado'`)    
    return db
}
module.exports = { criarBanco }