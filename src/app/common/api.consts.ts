export const BaseURL = `http://localhost:8080`;

// export const User = {
//   users: `/base/auth/user`,
//   updateAvatar: `/base/auth/changeAvatar`,
// };

export const Protocols = {
  protocols: `/designcenter/master/protocoltype`,
  connectivity: `/designcenter/b2b/connectivity`
};

export const DocFormat = {
  docformat: `/designcenter/master/documentformat`,
  partnerDoctype: `/designcenter/b2b/partnerDocumentType`
};
export const DocType = {
  doctype: `/designcenter/b2b/documenttype`,
  bussinessDocType: `/designcenter/master/businessdocumenttype`,
};

export const AppEndpoint = {
  partner: `/designcenter/b2b/partner`,
  addpartner: `/designcenter/b2b/partner`,
  identifications: `/designcenter/master/b2bidentificationtype`,
  environments:`/base/common/environment`,
};

export const AgreementsEndPoint = {
  agreementslist: `/designcenter/b2b/agreement`,
  agreement: `/designcenter/b2b/agreement`,
};

export const B2BRelation = {
  b2bRelation: `/designcenter/b2b/b2bRelation`,
  getDocType: `/designcenter/b2b/documenttype`,
  getPartner: `/designcenter/b2b/partner`,
  getPartnerConfig: `/designcenter/b2b/b2bRelationPartnerConfig`,
  createProcess: `/designcenter/b2b/b2bProcess`
};

export const LoginEndpoint = {
  login: `/base/auth/login`,
  logout: `/base/auth/logout`,
  userByToken: `/base/auth/userByToken`
}

export const AuthConstants = {
  authTokenKey: `access_token`,
  authExpiryKey: `access_expires`,
  authUser: `user`
}

export const DOCUMENT = `/designcenter/resource/document`;
export const COMPONENT = `/designcenter/master/component`;
export const COMPONENTS = `/designcenter/master/components`;
export const ACTION = `/designcenter/master/action`;

export const RESOURCE = {
  project: `/designcenter/resource/project`,
  endpoint: `/designcenter/resource/endpoint`,
  testEndpoint: `/designcenter/resource/testendpoint`,
  endpointType: `/designcenter/master/endpointtype`,
  flow: `/designcenter/resource/flow`,
  componentConfig: `/designcenter/resource/flow/componentConfig`
}

export const User = {
  register:`/quickstart/register`,
  login:`/quickStart/login`,
  getAllUsers:`/quickstart/getAllUsers`,
  user:`/quickStart/getUser`,
  getuser:`/quickstart/getUser`
};




export const Organization = {
  organization: `/managecenter/manage/organization`,
  environment: `/base/common/environment`
};

export const Event = {
  eventType: `/managecenter/event/eventtype`
};

// export const AppEndpoint = {
//   changePassword: `/base/auth/changePassword`,
// };


// export const LoginEndpoint = {
//   login: `/base/auth/login`,
//   logout: `/base/auth/logout`,
//   userByToken: `/base/auth/userByToken`
// }

// export const AuthConstants = {
//   authTokenKey: `access_token`,
//   authExpiryKey: `access_expires`,
//   authUser: `user`
// }

