export interface AuthenticatedRequest extends Request {
    user: {
        id: string;
    }
}
export interface ICreateSocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
    user_id: string;
}

export interface RequestBody {
    name: string;
    currentCompany: string;
    currentDesignation: string;
    pastCompany: string;
    pastDesignation: string;
    agree: string;
}