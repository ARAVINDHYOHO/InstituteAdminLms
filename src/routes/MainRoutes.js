import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import GroupPage from '../views/pages/userManagement/Groups';
import UserPage from '../views/pages/userManagement/Users';
import StudentPage from '../views/pages/studentManagement/students';
import CoursePage from '../views/pages/courseManagement/Courses';
import OrderPage from '../views/pages/orderManagement/orders';
import OrderDetails from 'views/pages/orderManagement/OrderDetails';
import PaymentPage from '../views/pages/paymentManagement/payments';
import RefundPage from '../views/pages/refundManagement/refunds';
import LoginPage from 'views/pages/authentication/LoginPage';
// import RegisterPage from 'views/pages/authentication/RegisterPage';
import ViewGroup from 'views/pages/userManagement/Groups/ViewGroup';
import AddGroup from 'views/pages/userManagement/Groups/AddGroup';
import EditGroup from 'views/pages/userManagement/Groups/EditGroup';
import CourseDetails from 'views/pages/courseManagement/CourseDetails';
import CategoriesPage from 'views/pages/courseManagement/Categories';
// import DepartmentPage from 'views/pages/courseManagement/department';
import OnlineClassPage from 'views/pages/classManagement/onlineClasses';
import OfflineClassPage from 'views/pages/classManagement/offlineClasses';
import LiveClassPage from 'views/pages/classManagement/liveClasses';
import AttendancePage from 'views/pages/attendanceManagement'
import OnlineExamPage from 'views/pages/examManagement/Exams/onlineExams';
import OfflineExamPage from 'views/pages/examManagement/Exams/offlineExams';
import QuestionPaperPage from 'views/pages/examManagement/QuestionPapers';
import ExamResultPage from 'views/pages/examManagement/Results';
import ProfileFaqPage from 'views/pages/profileManagement/faqs';
import ProfileReviewPage from 'views/pages/profileManagement/review';
import ProfileTermsConditionPage from 'views/pages/profileManagement/termsConditions';
import ProfilePrivacyPolicyPage from 'views/pages/profileManagement/privacyPolicy';
import TeachingStaffPage from 'views/pages/staffManagement/teachingStaffs';
import NonTeachingStaffPage from 'views/pages/staffManagement/nonTeachingStaffs';
import UserDetails from 'views/pages/userManagement/Users/UserDetails';
import ProfileDetails from 'views/pages/staffManagement/teachingStaffs/ProfileDetails';
import Certificatepage from 'views/pages/certification';
import IdCard from 'views/pages/idCards';



// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const UserManagement = Loadable(lazy(() => import('views/pages/userManagement')));
// ==============================|| MAIN ROUTING ||============================== //

// Groups

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <Dashboard />
        }
      ]
    },
    {
      path: 'auth-pages',
      children: [
        {
          path: 'login-page',
          element: <LoginPage />
        },
        // {
        //   path: 'register-page',
        //   element: <RegisterPage />
        // }
      ]
    },
    {
      path: 'user-management',
      children: [
        {
          path: 'groups',
          element: <GroupPage />
        },
        {
          path: 'groups/create-group',
          element: <AddGroup />
        },
        {
          path: 'groups/edit-group',
          element: <EditGroup />
        },
        {
          path: 'groups/view-group',
          element: <ViewGroup />
        },
        {
          path: 'users',
          element: <UserPage />
        },
        {
          path: 'users/user-details',
          element: <UserDetails />
        }
      ]
    },
    {
      path: 'student-management',
      children: [
        {
          path: 'students',
          element: <StudentPage />
        }
      ]
    },
    {
      path: 'staff-management',
      children: [
        {
          path: 'teaching-staffs',
          element: <TeachingStaffPage />
        },
        {
          path: 'teaching-staffs/profile-details',
          element: <ProfileDetails />
        },
        {
          path: 'non-teaching-staffs',
          element: <NonTeachingStaffPage />
        }
      ]
    },
    {
      path: 'certificate-pages',
      children: [
        {
          path: 'certification',
          element: <Certificatepage />
        },
        {
          path: 'id-cards',
          element: <IdCard />
        },
      ]
    },
    {
      path: 'course-management',
      children: [
        {
          path: 'courses',
          element: <CoursePage />
        },
        {
          path: 'categories',
          element: <CategoriesPage />
        },
        // {
        //   path: 'department',
        //   element: <DepartmentPage />
        // },
        {
          path: 'Courses/CourseDetails',
          element: <CourseDetails />
        }
      ]
    },
    {
      path: 'class-management',
      children: [
        {
          path: 'online-classes',
          element: <OnlineClassPage />
        },
        {
          path: 'offline-classes',
          element: <OfflineClassPage />
        },
        {
          path: 'live-classes',
          element: <LiveClassPage />
        }
      ]
    },

    {
      path: 'attendance-management',
      children: [
        {
          path: 'attendance',
          element: <AttendancePage />
        }
      ]
    },

    {
      path: 'exam-management',
      children: [
        {
          path: 'exams/online-exams',
          element: <OnlineExamPage />
        },
        {
          path: 'exams/offline-exams',
          element: <OfflineExamPage />
        },
        {
          path: 'question-papers',
          element: <QuestionPaperPage />
        },
        {
          path: 'results',
          element: <ExamResultPage />
        }
      ]
    },
    {
      path: 'order-management',
      children: [
        {
          path: 'orders',
          element: <OrderPage />
        },
        {
          path: 'orders/order-details',
          element: <OrderDetails />
        }
      ]
    },
    {
      path: 'payment-management',
      children: [
        {
          path: 'payments',
          element: <PaymentPage />
        }
      ]
    },
    {
      path: 'refund-management',
      children: [
        {
          path: 'refunds',
          element: <RefundPage />
        }
      ]
    },

   
    {
      path: 'profile-management',
      children: [
        {
          path: 'faqs',
          element: <ProfileFaqPage />
        },
        {
          path: 'privacy-policies',
          element: <ProfilePrivacyPolicyPage />
        },
        {
          path: 'terms-conditions',
          element: <ProfileTermsConditionPage />
        },
        {
          path: 'review',
          element: <ProfileReviewPage />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'userManagement',
      element: <UserManagement />
    }
  ]
};

export default MainRoutes;
