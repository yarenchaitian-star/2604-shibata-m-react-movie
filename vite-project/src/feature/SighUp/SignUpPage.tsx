import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormField } from './components/FormField';
import { VALIDATION_RULES } from '../../libs/const/ValidationRules';
const SignUpPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });
    const onSubmit = () => {
        navigate('/list')
    };
    const password = watch('password');

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
                <h2 className="text-2xl text-center text-gray-800 font-bold mb-8">サインアップ</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
                    <div className="p-8 space-y-6 bg-white rounded-md shadow-md">
                        <FormField
                            label="userName"
                            type="text"
                            error={errors.username}
                            register={register('username', VALIDATION_RULES.username)}
                        />
                        <FormField
                            label="password"
                            type="password"
                            error={errors.password}
                            register={register('password', VALIDATION_RULES.password)}
                        />
                        <FormField
                            label="repassword"
                            type="password"
                            error={errors.rePassword}
                            register={register('rePassword', {
                                required: '確認用パスワードを入力してください',
                                validate: (value) => value === password || 'パスワードが一致しません'
                            })}
                        />
                        <FormField
                            label="mail"
                            type="email"
                            error={errors.email}
                            register={register('email', VALIDATION_RULES.mail)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors font-bold shadow"
                    >
                        サインアップ
                    </button>
                </form>
            </div>
        </>
    );
};
export default SignUpPage;