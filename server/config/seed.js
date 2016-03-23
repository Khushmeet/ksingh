/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Article from '../api/article/article.model';
import Tag from '../api/tag/tag.model';

var moment =  require('../../client/bower_components/moment/moment.js');


Article.find({}).removeAsync()
  .then(() => {
    Article.createAsync({
      '_id': '5677bcec37407ae60754252b',
      'title': 'Using Yeoman Generator',
      'author': 'Khushmeet Singh',
      'date': moment().format('Do MMMM YYYY'),
      'content': '<h2>This is the article about Yeoman Generator</h2><p>This is the paragraph about using Angular-Fullstack and creating a beautiful website using MEAN Stack</p>',
      'intro':'This is the intro to Using Yeoman Generator. And how to scaffold the code.',
      'tags': [
        'Yeoman,',
        'Angular-Fullstack,',
        'MEAN Stack,',
        'website'
      ]
    }, {
      '_id': '569d2d9b9g72ae8586bdad04',
      'title': 'Using Elementary OS',
      'author': 'Khushmeet Singh',
      'date': moment().format('Do MMMM YYYY'),
      'content': '<h2>This is the article about Elementary OS</h2><p>This is the paragraph about using Elementary OS and about its User Interface of Pantheon Desktop environemnt</p>',
      'intro':'This is the introduction to using Elementary OS. Linux distro built using ubuntu and deeper debian. This is also the first linux distro with pantheon desktop.',
      'tags': [
        'Elementary,',
        'Linux'
      ]
    })
    .then(() => {
      console.log('finished populating articles');
    });
  });

Tag.find({}).removeAsync()
  .then(()=>{
    Tag.createAsync({
      'tags':['Angular.js','Node.js','Python','Android','Linux','Elementary OS']
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
