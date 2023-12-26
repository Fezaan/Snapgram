import {
    useQuery, useMutation,useInfiniteQuery, useQueryClient
} from '@tanstack/react-query';
import { signInAccount, createUserAccount } from '../appwrite/api';
import { INewUser } from '@/types';

export const useCreateUserAccount=()=>{
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}
export const useSignInAccount=()=>{
    return useMutation({
        mutationFn: (user: {
            email: string;
            password: string;
        }) => signInAccount(user)
    })
}