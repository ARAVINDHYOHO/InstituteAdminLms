// assets
import { IconUsers } from '@tabler/icons';

// constant
const icons = {
  IconUsers
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const Newroutes = {
  id: 'Management',
  title: 'Institution Admin',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'dropDown',
      title: 'Auth Pages',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'login',
          title: 'Login Page',
          type: 'item',
          url: '/auth-pages/login-page',
          target: false
        },

        // {
        //   id: 'register',
        //   title: 'Register',
        //   type: 'item',
        //   url: '/auth-pages/register-page',
        //   target: false
        // }
      ]
    },
    {
      id: 'dropDown',
      title: 'User Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'groups',
          title: 'Groups',
          type: 'item',
          url: '/user-management/groups',
          target: false
        },

        {
          id: 'users',
          title: 'Users',
          type: 'item',
          url: '/user-management/users',
          target: false
        }
      ]
    },
    {
      id: 'dropDown',
      title: 'Student Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'students',
          title: 'Students',
          type: 'item',
          url: '/student-management/students',
          target: false
        }
      ]
    },
    {
      id: 'dropDown',
      title: 'Staff Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'teaching-staffs',
          title: 'Teaching Staffs',
          type: 'item',
          url: '/staff-management/teaching-staffs',
          target: false
        },
        {
          id: 'non-teaching-staffs',
          title: 'Non Teaching Staffs',
          type: 'item',
          url: '/staff-management/non-teaching-staffs',
          target: false
        }
      ]
    },
    {
      id: 'dropDown',
      title: 'Course Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'categories',
          title: 'Categories',
          type: 'item',
          url: '/course-management/categories',
          target: false
        },
        {
          id: 'courses',
          title: 'Courses',
          type: 'item',
          url: '/course-management/courses',
          target: false
        },
        // {
        //   id: 'department',
        //   title: 'Department',
        //   type: 'item',
        //   url: '/course-management/department',
        //   target: false
        // }

      ]
    },
    {
      id: 'dropDown',
      title: 'Class Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'online-classes',
          title: 'Online Classes',
          type: 'item',
          url: '/class-management/online-classes',
          target: false
        },
        {
          id: 'offline-classes',
          title: 'Offline Classes',
          type: 'item',
          url: '/class-management/offline-classes',
          target: false
        },
        {
          id: 'live-classes',
          title: 'Live Classes',
          type: 'item',
          url: '/class-management/live-classes',
          target: false
        }
      ]
    },

    {
      id: 'dropDown',
      title: 'Attendance Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'attendance',
          title: 'Attendance',
          type: 'item',
          url: '/attendance-management/attendance',
          target: false
        }
      ]
    },

    {
      id: 'dropDown',
      title: 'Exam Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'exams',
          title: 'Exams',
          type: 'collapse',
          children: [
            {
              id: 'online-exams',
              title: 'Online Exams',
              type: 'item',
              url: '/exam-management/exams/online-exams',
              target: false
            },
            {
              id: 'offline-exams',
              title: 'Offline Exams',
              type: 'item',
              url: '/exam-management/exams/offline-exams',
              target: false
            }
          ]
        },
        {
          id: 'question-papers',
          title: 'Question Papers',
          type: 'item',
          url: '/exam-management/question-papers',
          target: false
        },
        {
          id: 'results',
          title: 'Results',
          type: 'item',
          url: '/exam-management/results',
          target: false
        }
      ]
    },

    {
      id: 'dropDown',
      title: 'Certification Page',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'Certificate',
          title: 'Certificate',
          type: 'item',
          url: '/certificate-pages/certification',
          target: false
        },
        {
          id: 'id-cards',
          title: 'ID Cards',
          type: 'item',
          url: '/certificate-pages/id-cards',
          target: false
        },
      ]
    },

    {
      id: 'dropDown',
      title: 'Order Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'orders',
          title: 'Orders',
          type: 'item',
          url: '/order-management/orders',
          target: false
        }
      ]
    },
    {
      id: 'dropDown',
      title: 'Payment Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'payments',
          title: 'Payment',
          type: 'item',
          url: '/payment-management/payments',
          target: false
        }
      ]
    },
    {
      id: 'dropDown',
      title: 'Refund Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'refunds',
          title: 'Refunds',
          type: 'item',
          url: '/refund-management/refunds',
          target: false
        }
      ]
    },



    {
      id: 'dropDown',
      title: 'Profile Management',
      type: 'collapse',
      icon: icons.IconUsers,
      children: [
        {
          id: 'faq',
          title: 'Faqs',
          type: 'item',
          url: '/profile-management/faqs',
          target: false
        },
        {
          id: 'terms-condition',
          title: 'Terms & Conditions',
          type: 'item',
          url: '/profile-management/terms-conditions',
          target: false
        },
        {
          id: 'privacy-policy',
          title: 'Privacy Policies',
          type: 'item',
          url: '/profile-management/privacy-policies',
          target: false
        },
        {
          id: 'review',
          title: 'Review',
          type: 'item',
          url: '/profile-management/review',
          target: false
        }
      ]
    }
  ]
};

export default Newroutes;
