import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { currentUser } from "../api/constant";

export const UserContext = createContext();

export const UserIntialValue = {
  apple_access_token: null,
  apple_id: null,
  apple_refresh_token: null,
  avatar: null,
  avatar_url: "",
  cancel_fastfox_at: null,
  checkout_customer_id: null,
  checkout_fastfox_payment_token: null,
  checkout_fastfox_session_id: null,
  checkout_status: null,
  country_code: "",
  created_at: "",
  csv_accept_email_marketing: 0,
  csv_accept_sms_marketing: 0,
  csv_company: null,
  csv_filename: null,
  csv_shopify_import: 0,
  csv_tags: null,
  csv_total_order: 0,
  csv_total_spent: "",
  customer_id: "",
  deleted_at: null,
  email: "",
  email_verified_at: null,
  fast_fox_subscription: 0,
  fast_fox_subscription_end_date: null,
  fastfox_instrument_id: null,
  id: null,
  is_admin_vendor: 0,
  is_block: 0,
  is_fastfox_csv_import: 0,
  is_new_user: null,
  is_online: 0,
  is_update_progress: 0,
  mobile: "",
  name: "",
  next_token: "",
  role_id: null,
  social_id: null,
  social_type: null,
  step: null,
  token: localStorage.getItem("token") ?? "",
  updated_at: "",
};

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(UserIntialValue);

  const getCurrentUserDetails = async () => {
    try {
      const response = await axios.get(currentUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUserData(response.data.result);
    } catch (error) {
      console.log("Current user api: ", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUserDetails();
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserState = () => useContext(UserContext);
