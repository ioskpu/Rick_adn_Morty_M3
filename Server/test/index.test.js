const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    describe('GET /rickadnmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickadnmorty/character/1').expect(200);
        });
        it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "status" ', async () => {
            const response = (await agent.get('/rickadnmorty/character/1')).body;
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('name');
            expect(response).toHaveProperty('species');
            expect(response).toHaveProperty('gender');
            expect(response).toHaveProperty('status');
            expect(response).toHaveProperty('id');
        });
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/4').expect(500);
        });
    });
    describe('GET /rickadnmorty/login/', () => {
        it('La info de login es correcta', async () => {
            const response = (await agent.get('/rickadnmorty/login? email=henry@mail.com & password=Henry@123')).body;
            expect(response.access).toEqual(true);
        });

        it('La info de login es correcta', async () => {
            const response = (await agent.get('/rickadnmorty/login? email=henr@mail.com & password=Henry@143')).body;
            expect(response.access).toEqual(false);
        });

    });
    describe('GET /rickandmorty/fav', () => {
        const character1 = { id: 1, name: 'Rick'}
        const character2 = { id: 2, name: 'Maria'}
        it('Devuelve el elemento enviado por body', async () => {
            const response = (await agent.get('/rickandmorty/fav').set(character1)).body;
            expect(response).toContainEqual(character1);
        });

        it('Devuelve el elemento enviado y el actual', async () => {
            const response = (await agent.post('/rickandmorty/fav').set(character1)).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        });
    });
    describe('', () => {
        it('', async () => {
            
        });
    });
});