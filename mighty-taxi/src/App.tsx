import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashHome from './pages/DashHome'
import MainLayout from './MainLayout/MainLayout'
import BookNow from './pages/BookNow'
import RiderList from './pages/Rider/RiderList'
import AddRider from './pages/Rider/AddRider'
import RegionList from './pages/Region/RegionList'
import AddRegion from './pages/Region/AddRegion'
import ServiceList from './pages/Service/ServiceList'
import AddService from './pages/Service/AddService'
import DriverList from './pages/Driver/DriverList'
import PendingDriver from './pages/Driver/PendingDriver'
import AddDriver from './pages/Driver/AddDriver'
import ManageDriverDocument from './pages/Driver/ManageDriverDocument'
import DocumentList from './pages/Document/DocumentList'
import AddDocument from './pages/Document/AddDocument'
import CuponList from './pages/Cupon/CuponList'
import AddCupon from './pages/Cupon/AddCupon'
import RideRequestAllList from './pages/RideRequest/RideRequestAllList'
import RideRequestNewList from './pages/RideRequest/RideRequestNewList'
import RideRequestCompletedList from './pages/RideRequest/RideRequestCompletedList'
import RideRequestCancelledList from './pages/RideRequest/RideRequestCancelledList'
import RideRequestPendingList from './pages/RideRequest/RideRequestPendingList'
import ComplaintResolvedList from './pages/Complaint/ComplaintResolvedList'
import ComplaintPendingList from './pages/Complaint/ComplaintPendingList'
import ComplaintInvestigationList from './pages/Complaint/ComplaintInvestigationList'
import WithdrawRequestAll from './pages/WithdrawRequest/WithdrawRequestAll'
import WithdrawRequestPendingList from './pages/WithdrawRequest/WithdrawRequestPendingList'
import WithdrawRequestApprovedList from './pages/WithdrawRequest/WithdrawRequestApprovedList'
import WithdrawRequestDeclineList from './pages/WithdrawRequest/WithdrawRequestDeclineList'
import AppLanguageSettingBulkImportDataList from './pages/AppLanguageSetting/AppLanguageSettingBulkImportDataList'
import AppLanguageSettingLanguageWithKeywordList from './pages/AppLanguageSetting/AppLanguageSettingLanguageWithKeywordList'
import AppLanguageSettingLanguageList from './pages/AppLanguageSetting/AppLanguageSettingLanguageList'
import AppLanguageSettingDefaultKeywordList from './pages/AppLanguageSetting/AppLanguageSettingDefaultKeywordList'
import AccountSettingRoleList from './pages/AccountSetting/AccountSettingRoleList'
import AccountSettingPermissionList from './pages/AccountSetting/AccountSettingPermissionList'
import AdditionalFeesList from './pages/AdditionalFees/AdditionalFeesList'
import AddAdditionalFees from './pages/AdditionalFees/AddAdditionalFees'
import SOSList from './pages/SOS/SOSList'
import AddSOS from './pages/SOS/AddSOS'
import AddPushNotification from './pages/PushNotification/AddPushNotification'
import PushNotificationList from './pages/PushNotification/PushNotificationList'
import AdminReport from './pages/Report/AdminReport'
import DriverEarning from './pages/Report/DriverEarning'
import ServiceWiseReport from './pages/Report/ServiceWiseReport'
import PagesList from './pages/Pages/PagesList'
import TermsAndCondition from './pages/Pages/TermsAndCondition'
import PrivacyPolicy from './pages/Pages/PrivacyPolicy'
import DriverLocation from './pages/DriverLocation'
import Setting from './pages/Setting'
import WebsiteSectionInformation from './pages/WebsiteSection/WebsiteSectionInformation'
import WebsiteSectionOurMission from './pages/WebsiteSection/WebsiteSectionOurMission'
import WebsiteSectionWhyChoose from './pages/WebsiteSection/WebsiteSectionWhyChoose'
import WebsiteSectionClientTestimonials from './pages/WebsiteSection/WebsiteSectionClientTestimonials'
import WebsiteSectionDownloadApp from './pages/WebsiteSection/WebsiteSectionDownloadApp'
import WebsiteSectionContactInfo from './pages/WebsiteSection/WebsiteSectionContactInfo'
import SurgePrice from './pages/SurgePrice'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<DashHome />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/rider-list" element={<RiderList />} />
            <Route path="/add-rider" element={<AddRider />} />
            <Route path="/region-list" element={<RegionList />} />
            <Route path="/add-region" element={<AddRegion />} />
            <Route path="/service-list" element={<ServiceList />} />
            <Route path="/add-service" element={<AddService />} />
            <Route path="/driver-list" element={<DriverList />} />
            <Route path="/pending-driver" element={<PendingDriver />} />
            <Route path="/add-driver" element={<AddDriver />} />
            <Route path="/manage-driver-document" element={<ManageDriverDocument />} />
            <Route path="/document-list" element={<DocumentList />} />
            <Route path="/add-document" element={<AddDocument />} />
            <Route path="/cupon-list" element={<CuponList />} />
            <Route path="/add-cupon" element={<AddCupon />} />
            <Route path="/ride-request-all" element={<RideRequestAllList />} />
            <Route path="/ride-request-new" element={<RideRequestNewList />} />
            <Route path="/ride-request-completed" element={<RideRequestCompletedList />} />
            <Route path="/ride-request-cancelled" element={<RideRequestCancelledList />} />
            <Route path="/ride-request-pending" element={<RideRequestPendingList />} />
            <Route path="/complaint-resolved" element={<ComplaintResolvedList />} />
            <Route path="/complaint-pending" element={<ComplaintPendingList />} />
            <Route path="/complaint-investigation" element={<ComplaintInvestigationList />} />
            <Route path="/surge-price" element={<SurgePrice />} />
            <Route path="/withdraw-request-all" element={<WithdrawRequestAll />} />
            <Route path="/withdraw-request-pending" element={<WithdrawRequestPendingList />} />
            <Route path="/withdraw-request-approved" element={<WithdrawRequestApprovedList />} />
            <Route path="/withdraw-request-decline" element={<WithdrawRequestDeclineList />} />
            <Route path="/app-language-setting-default-keyword" element={<AppLanguageSettingDefaultKeywordList />} />
            <Route path="/app-language-setting-language-list" element={<AppLanguageSettingLanguageList />} />
            <Route path="/app-language-setting-language-with-keyword-list" element={<AppLanguageSettingLanguageWithKeywordList />} />
            <Route path="/app-language-setting-bulk-import-data-list" element={<AppLanguageSettingBulkImportDataList />} />
            <Route path="/account-setting-role-list" element={<AccountSettingRoleList />} />
            <Route path="/account-setting-permission-list" element={<AccountSettingPermissionList />} />
            <Route path="/additional-fees-list" element={<AdditionalFeesList />} />
            <Route path="/add-additional-fees" element={<AddAdditionalFees />} />
            <Route path="/sos-list" element={<SOSList />} />
            <Route path="/add-sos" element={<AddSOS />} />
            <Route path="/push-notification-list" element={<PushNotificationList />} />
            <Route path="/add-push-notification" element={<AddPushNotification />} />
            <Route path="/admin-report" element={<AdminReport />} />
            <Route path="/driver-earning" element={<DriverEarning />} />
            <Route path="/service-wise-report" element={<ServiceWiseReport />} />
            <Route path="/pages-list" element={<PagesList />} />
            <Route path="/terms-and-condition" element={<TermsAndCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/driver-location" element={<DriverLocation />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/website-section-information" element={<WebsiteSectionInformation />} />
            <Route path="/website-section-our-mission" element={<WebsiteSectionOurMission />} />
            <Route path="/website-section-why-choose" element={<WebsiteSectionWhyChoose />} />
            <Route path="/website-section-client-testimonials" element={<WebsiteSectionClientTestimonials />} />
            <Route path="/website-section-download-app" element={<WebsiteSectionDownloadApp />} />
            <Route path="/website-section-contact-info" element={<WebsiteSectionContactInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}