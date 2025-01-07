import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
projects = [
    {
      id: 1,
      title: 'Join',
      stack: ['Angular', 'Typescript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: './../../assets/img/join.png',
      description: '',
      gitHubUrl: 'https://github.com/anja-gollner/join',
      projectUrl: 'https://join.anja-gollner.com/',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: './../../assets/img/el-pollo-loco.png',
      description: '',
      gitHubUrl: 'https://github.com/anja-gollner/elPolloLoco',
      projectUrl: 'https://elpolloloco.anja-gollner.com/',
    },

    {
      id: 3,
      title: 'DA Bubble',
      stack: ['Angular', 'Typescript', 'Firebase'],
      imageUrl: './../../assets/img/da-bubble.png',
      description: '',
      gitHubUrl: '',
      projectUrl: 'https://dabubble.anja-gollner.com/',
    },
  ];

  getProjects() {
    return this.projects;
  }
}
