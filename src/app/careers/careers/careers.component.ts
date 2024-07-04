import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from 'src/app/footer/footer.component';
import { career } from 'src/app/service.ts/career';
import {MatInputModule} from '@angular/material/input'
interface JobCategory {
  name: string;
  items: string[];
  displayedItems: string[];
  remainingItems: string[];
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  standalone:true,
  imports: [CommonModule,MatSelectModule,FormsModule,FooterComponent,MatFormFieldModule, MatInputModule ]
})
export class CareersComponent implements OnInit {
  isCollapsed: boolean;
  jobCategories: JobCategory[] = [];
  wordsLimit = 35;
  category: string;
  email: string;
  modalRef: NgbModalRef;
  selectedFile: File | null = null;
  success: boolean = false;
  response: string;
  @ViewChild('exampleModalCenter') applyNow: any;
  @ViewChild('cvForm') cvForm: NgForm;
  constructor(public modal: NgbModal, private career: career) {}

  ngOnInit(): void {
    this.jobCategories = [
      {
        name: 'Front-End Developer',
        items: [
          'Proficiency in HTML, CSS, and JavaScript is essential. These are the core technologies used to create the structure, style, and interactivity of web pages.',
          'Familiarity with frontend frameworks and libraries such as React, Angular, or Vue.js',
          'Collaborating with UI/UX designers to implement visually appealing and user-friendly interfaces.',
          'Using version control systems, such as Git',
        ],
        displayedItems: [],
        remainingItems: [],
      },
      {
        name: 'Back-End Developer',
        items: [
          'Writing server-side code using programming languages such as Python, Java, Ruby, PHP, Node.js',
          'Designing, implementing, and maintaining databases (e.g., MySQL, PostgreSQL, MongoDB)',
          'Integrating external services, APIs, and third-party components',
          'Develop and execute unit tests, integration tests, and end-to-end tests to ensure the reliability of the backend code',
          'Working closely with frontend developers, designers, and other stakeholders',
        ],
        displayedItems: [],
        remainingItems: [],
      },
      {
        name: 'Graphic Designer',
        items: [
          'Collaborate with clients or stakeholders to understand the goals, objectives, and requirements of a project',
          'Design logos, brand elements, and visual identities that represent and reinforce the brand`s image and values',
          'Work on the design of user interfaces for websites, applications, or software, focusing on usability and user experience.',
          'Manage multiple projects and deadlines efficiently, ensuring timely delivery of high-quality designs',
        ],
        displayedItems: [],
        remainingItems: [],
      },
      {
        name: 'Node.Js Developer',
        items: [
          'Expert in database architecture and creating RestFull API using Node.JS',
          'Design and build core frameworks on Node.JS, shared services, NPM packages, and RESTful /socket APIs.',
          'Expert in developing strong and powerful backend with complex features using MEAN or MERN.',
          'Translates complex requirements into an easy to understand user experience by following the user-centered design process.',
          'Experience with source/version control systems such as GIT.',
        ],
        displayedItems: [],
        remainingItems: [],
      },
      {
        name: 'MEAN Stack Developer',
        items: [
          'Develop and maintain web applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js).',
          'Collaborate with cross-functional teams to design, develop, and implement new features and enhancements.',
          'Write high-quality, clean, maintainable code, and participate in code reviews.',
          'Design and implement scalable and secure RESTful APIs.',
          'Work closely with front-end developers to integrate user-facing elements with server-side logic.',
          'Troubleshoot, debug, and resolve software defects and issues.',
          'Keep up-to-date with emerging technologies and industry trends.',
        ],
        displayedItems: [],
        remainingItems: [],
      },
    ];

    this.jobCategories.forEach((category) =>
      this.updateDisplayedItems(category)
    );
  }

  updateDisplayedItems(category: JobCategory): void {
    let wordCount = 0;
    category.displayedItems = category.items.filter((item) => {
      const itemWordCount = this.calculateWordCount(item);
      if (wordCount + itemWordCount <= this.wordsLimit) {
        wordCount += itemWordCount;
        return true;
      } else {
        return false;
      }
    });

    category.remainingItems = category.items.slice(
      category.displayedItems.length
    );
  }

  showMore(category: JobCategory): void {
    category.displayedItems = category.items;
    category.remainingItems = [];
  }

  calculateWordCount(input: string): number {
    return input.split(/\s+/).length;
  }

  openForm() {
    this.modalRef = this.modal.open(this.applyNow, {
      animation: true,
      centered: true,
      size: 'md',
    });
  }

  submit(f: NgForm) {
    if (f.valid && this.selectedFile) {
      console.log(this.category, this.email, this.selectedFile);
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('category', this.category);
      formData.append('attachment', this.selectedFile);
      this.career.dropCv(formData).subscribe((res) => {
        this.success = true;
        this.response = res.message;
        setTimeout(() => {
          f.resetForm();
          this.modalRef.close();
          this.success = false;
        }, 1000);
      });
    } else {
      this.success = true;
      this.response = 'Please fill all Fields';
      setTimeout(() => {
        this.success = false;
      }, 1000);
    }
  }
  fileUpdated(event: any) {
    this.selectedFile = null
    const inputElement = event.target;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }
}
