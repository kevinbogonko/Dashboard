// DOM FOR SIDEBAR MENU FULL SCREEN
const sidebarMenu = document.getElementById('sidebar-menu');
const hamburger = document.querySelector('.hamburger');

// DOM FOR MOBILE MENU
const mobileHamburger = document.querySelector('.hamburger-mobile');
const mobileMenu = document.querySelector('.mobile-sidebar-menu');

// DOM FOR SUBLIST MENU
const studentTag = document.getElementById('student-tag');
const subListStudent = document.getElementById('sub-list-student');

const studentMobileTag = document.getElementById('mobile-student-tag');
const subListMobileStudent = document.getElementById('mobile-sub-list-student');

const teacherTag = document.getElementById('teacher-tag');
const subListTeacher = document.getElementById('sub-list-teacher');

const teacherMobileTag = document.getElementById('mobile-teacher-tag');
const subListMobileTeacher = document.getElementById('mobile-sub-list-teacher');

const examTag = document.getElementById('exam-tag');
const subListExam = document.getElementById('sub-list-exam');

const examMobileTag = document.getElementById('mobile-exam-tag');
const subListMobileExam = document.getElementById('mobile-sub-list-exam');

const reportTag = document.getElementById('report-tag');
const subListReport = document.getElementById('sub-list-report');

const reportMobileTag = document.getElementById('mobile-report-tag');
const subListMobileReport = document.getElementById('mobile-sub-list-report');

const informationTag = document.getElementById('information-tag');
const subListInformation = document.getElementById('sub-list-information');

const informationMobileTag = document.getElementById('mobile-information-tag');
const subListMobileInformation = document.getElementById('mobile-sub-list-information');

// DOM FOR USER PROFILE
const user = document.getElementById('user-icon');
const userDropdownMenu = document.querySelector('.user-dropdown-menu');

// FUNCTION FOR TOGGLING MOBILE MENU
function toggleMobileMenu() {
    if (mobileMenu.classList.contains("showMenu")) {
        mobileMenu.classList.remove("showMenu");
    } else {
        mobileMenu.classList.add("showMenu");
    }
}
  
function toggleMenu() {
    if (sidebarMenu.classList.contains("noDisplay")) {
        sidebarMenu.classList.remove('noDisplay');
    } else {
        sidebarMenu.classList.add('noDisplay');
    }
}

function toggleSideStudentMenuOptions(){
    if(subListStudent.classList.contains('noDisplay')){
        subListStudent.classList.remove('noDisplay');
    } else{
        subListStudent.classList.add('noDisplay');
    }
}

function toggleSideMobileStudentMenuOptions(){
    if(subListMobileStudent.classList.contains('noDisplay')){
        subListMobileStudent.classList.remove('noDisplay');
    } else{
        subListMobileStudent.classList.add('noDisplay');
    }
}

function toggleSideTeacherMenuOptions(){
    if(subListTeacher.classList.contains('noDisplay')){
        subListTeacher.classList.remove('noDisplay');
    } else{
        subListTeacher.classList.add('noDisplay');
    }
}

function toggleSideMobileTeacherMenuOptions(){
    if(subListMobileTeacher.classList.contains('noDisplay')){
        subListMobileTeacher.classList.remove('noDisplay');
    } else{
        subListMobileTeacher.classList.add('noDisplay');
    }
}

function toggleSideExamMenuOptions(){
    if(subListExam.classList.contains('noDisplay')){
        subListExam.classList.remove('noDisplay');
    } else{
        subListExam.classList.add('noDisplay');
    }
}

function toggleSideMobileExamMenuOptions(){
    if(subListMobileExam.classList.contains('noDisplay')){
        subListMobileExam.classList.remove('noDisplay');
    } else{
        subListMobileExam.classList.add('noDisplay');
    }
}

function toggleSideInformationMenuOptions(){
    if(subListInformation.classList.contains('noDisplay')){
        subListInformation.classList.remove('noDisplay');
    } else{
        subListInformation.classList.add('noDisplay');
    }
}

function toggleSideMobileInformationMenuOptions(){
    if(subListMobileInformation.classList.contains('noDisplay')){
        subListMobileInformation.classList.remove('noDisplay');
    } else{
        subListMobileInformation.classList.add('noDisplay');
    }
}

function toggleSideReportMenuOptions(){
    if(subListReport.classList.contains('noDisplay')){
        subListReport.classList.remove('noDisplay');
    } else{
        subListReport.classList.add('noDisplay');
    }
}

function toggleSideMobileReportMenuOptions(){
    if(subListMobileReport.classList.contains('noDisplay')){
        subListMobileReport.classList.remove('noDisplay');
    } else{
        subListMobileReport.classList.add('noDisplay');
    }
}

function toggleUserInfo(){
    if(userDropdownMenu.classList.contains('noDisplay')){
        userDropdownMenu.classList.remove('noDisplay')
    } else{
        userDropdownMenu.classList.add('noDisplay')
    }
}

mobileHamburger.addEventListener("click", toggleMobileMenu);
hamburger.addEventListener('click', toggleMenu);
studentTag.addEventListener('click', toggleSideStudentMenuOptions);
studentMobileTag.addEventListener('click', toggleSideMobileStudentMenuOptions);
teacherTag.addEventListener('click', toggleSideTeacherMenuOptions);
teacherMobileTag.addEventListener('click', toggleSideMobileTeacherMenuOptions);
examTag.addEventListener('click', toggleSideExamMenuOptions);
examMobileTag.addEventListener('click', toggleSideMobileExamMenuOptions);
informationTag.addEventListener('click', toggleSideInformationMenuOptions);
informationMobileTag.addEventListener('click', toggleSideMobileInformationMenuOptions);
reportTag.addEventListener('click', toggleSideReportMenuOptions);
reportMobileTag.addEventListener('click', toggleSideMobileReportMenuOptions);
user.addEventListener('click', toggleUserInfo);


