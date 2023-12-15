import { Component, OnInit } from '@angular/core';

interface JobCategory {
  name: string;
  items: string[];
  displayedItems: string[];
  remainingItems: string[];
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  isCollapsed: boolean;
  jobCategories: JobCategory[] = [];
  wordsLimit = 30;

  constructor() {}

  ngOnInit(): void {
    this.jobCategories = [
      {
        name: 'BackEnd',
        items: [
          'Develop server-side logic using Node.js to handle requests from the frontend.',
          'Use Express.js, a popular Node.js web application framework, to build robust and scalable APIs.',
          'Work with various databases, such as MongoDB, MySQL, or PostgreSQL, to store and retrieve data',
          'Develop and execute unit tests, integration tests, and end-to-end tests to ensure the reliability of the backend code'
        ],
        displayedItems: [],
        remainingItems: []
      },
      {
        name: 'FrontEnd',
        items: [
          'Utilize Angular components, directives, services, and modules to structure and organize the application',
          'Ensure consistent and pixel-perfect implementation of the design across different browsers and devices',
          'Create and handle forms using Angulars form handling features, including template-driven and reactive forms',
          'Integrate frontend code with backend services and APIs by making HTTP requests and handling responses using Angulars HttpClient module'
        ],
        displayedItems: [],
        remainingItems: []
      },
      {
        name: 'Graphic',
        items: [
          'Collaborate with clients or stakeholders to understand the goals, objectives, and requirements of a project',
          'Design logos, brand elements, and visual identities that represent and reinforce the brand`s image and values',
          'Work on the design of user interfaces for websites, applications, or software, focusing on usability and user experience.',
          'Manage multiple projects and deadlines efficiently, ensuring timely delivery of high-quality designs'
        ],
        displayedItems: [],
        remainingItems: []
      }
    ];

    this.jobCategories.forEach(category => this.updateDisplayedItems(category));
  }

  updateDisplayedItems(category: JobCategory): void {
    let wordCount = 0;
    category.displayedItems = category.items.filter(item => {
      const itemWordCount = this.calculateWordCount(item);
      if (wordCount + itemWordCount <= this.wordsLimit) {
        wordCount += itemWordCount;
        return true;
      } else {
        return false;
      }
    });

    category.remainingItems = category.items.slice(category.displayedItems.length);
  }

  showMore(category: JobCategory): void {
    category.displayedItems = category.items;
    category.remainingItems = [];
  }

  calculateWordCount(input: string): number {
    return input.split(/\s+/).length;
  }
}