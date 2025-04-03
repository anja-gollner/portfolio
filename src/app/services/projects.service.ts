import { Injectable } from '@angular/core';
import { Project } from './../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
constructor() {}

projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      stack: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: './../../assets/img/join.png',
      imgOverlay: './../../assets/img/join_overlay.png',
      description: '',
      gitHubUrl: 'https://github.com/anja-gollner/join',
      projectUrl: 'http://join.anja-gollner.com/',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      stack: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: './../../assets/img/el-pollo-loco.png',
      imgOverlay: './../../assets/img/el-pollo-loco_overlay.png',
      description: '',
      gitHubUrl: 'https://github.com/anja-gollner/elPolloLoco',
      projectUrl: 'http://elpolloloco.anja-gollner.com/',
    },

    {
      id: 3,
      title: 'DA Bubble',
      stack: ['Angular', 'TypeScript', 'Firebase'],
      imageUrl: './../../assets/img/da-bubble.png',
      imgOverlay: './../../assets/img/da-bubble_overlay.png',
      description: '',
      gitHubUrl: 'https://github.com/anja-gollner/DaBubble-angular',
      projectUrl: 'https://dabubble.anja-gollner.com/',
    },
    {
      id: 4,
      title: 'Coderr',
      stack: ['JavaScript', 'Python', 'Django'],
      imageUrl: './../../assets/img/coderr.png',
      imgOverlay: './../../assets/img/coderr.png',
      description: 'A platform for developers to share and find coding challenges.',
      gitHubUrl: 'https://github.com/anja-gollner/coderr_backend',
      projectUrl: '',
    },
    {
      id: 5,
      title: 'Videoflix',
      stack: ['Angular', 'TypeScript', 'Python', 'Django'],
      imageUrl: './../../assets/img/videoflix.png',
      imgOverlay: './../../assets/img/videoflix.png',
      description: 'A web application for streaming and managing video content.',
      gitHubUrl: 'https://github.com/anja-gollner/videoflix_backend',
      projectUrl: '',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
