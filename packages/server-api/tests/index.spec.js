import assert from 'assert';
import http from 'http';
import server from '../src/index.ts';


describe('Server should be running at PORT 3001', () => {
  it('should return 200', done => {
    http.get('http://localhost:3001/api/v1', res => {
      assert.equal(200, res.statusCode);
      server.close();
      done();
    });
  });
});