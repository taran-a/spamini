import { config } from '../config';
import { IMail } from '../types';

export const fetchMails = (): Promise<IMail[]> => {
    return fetch(`${config.url}/mails`)
            .then((response) => (response.ok ? response.json() : []))
            .catch((error) => {
                console.error(error);
                return [];
            });
};
