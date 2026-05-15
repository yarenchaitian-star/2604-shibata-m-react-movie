import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { SignUpFormInputs } from "../types/AnimeInterface";
export const useSignUpPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormInputs>({
        mode: 'onBlur',
    });
    const onSubmit = () => {
        navigate('/list')
    };
    const password = watch('password');

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        password,
    };
};