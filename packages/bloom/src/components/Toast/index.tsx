import React,{ useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { createPortal } from 'react-dom';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastProps {
    id: string;
    message: string;
    title?: string;
    variant?: ToastVariant;
    duration?: number;
    showCloseButton?: boolean;
    onDismiss?: (id: string) => void;
    className?: string;
}

export interface ToastContainerProps {
    position?: ToastPosition;
    className?: string;
}

export const Toast: React.FC<ToastProps> = ({
    id,
    message,
    title,
    variant = 'info',
    duration = 5000,
    showCloseButton = true,
    onDismiss,
    className,
}) => {
    const [visible, setVisible] = useState(true);
    const [removing, setRemoving] = useState(false);

    const handleDismiss = () => {
        setRemoving(true);
        setTimeout(() => {
            setVisible(false);
            if (onDismiss) {
                onDismiss(id);
            }
        }, 300); // Animation duration
    };

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                handleDismiss();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration]);

    const variantClasses = {
        success: 'bg-green-100 border-green-500 text-green-800',
        error: 'bg-red-100 border-red-500 text-red-800',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-800',
        info: 'bg-blue-100 border-blue-500 text-blue-800',
    };

    const iconClasses = {
        success: 'text-green-500',
        error: 'text-red-500',
        warning: 'text-yellow-500',
        info: 'text-blue-500',
    };

    const getIcon = () => {
        switch (variant) {
            case 'success':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                );
            case 'info':
            default:
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                );
        }
    };

    if (!visible) return null;

    return (
        <div
            className={twMerge(
                'flex items-start p-4 mb-3 w-full max-w-xs rounded-md shadow-md border-l-4 transform transition-all duration-300 ease-in-out',
                variantClasses[variant],
                removing ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100',
                className
            )}
            role="alert"
        >
            <div className={twMerge('flex-shrink-0 mr-3', iconClasses[variant])}>
                {getIcon()}
            </div>
            <div className="flex-1">
                {title && <h3 className="font-medium text-sm">{title}</h3>}
                <div className="text-sm">{message}</div>
            </div>
            {showCloseButton && (
                <button
                    type="button"
                    className="ml-3 text-gray-400 hover:text-gray-900 focus:outline-none"
                    onClick={handleDismiss}
                    aria-label="Close"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export const ToastContainer: React.FC<ToastContainerProps & { children?: React.ReactNode }> = ({
    position = 'top-right',
    className,
    children,
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const positionClasses = {
        'top-right': 'top-0 right-0',
        'top-left': 'top-0 left-0',
        'bottom-right': 'bottom-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'top-center': 'top-0 left-1/2 transform -translate-x-1/2',
        'bottom-center': 'bottom-0 left-1/2 transform -translate-x-1/2',
    };

    if (!mounted) return null;

    const container = document.getElementById('toast-container') || document.body;

    return createPortal(
        <div
            className={twMerge(
                'fixed z-50 p-4 flex flex-col items-end',
                positionClasses[position],
                className
            )}
        >
            {children}
        </div>,
        container
    );
};

Toast.displayName = 'Toast';
ToastContainer.displayName = 'ToastContainer';

// Toast Manager to handle multiple toasts
type ToastItem = Omit<ToastProps, 'onDismiss'>;

interface ToastContextType {
    showToast: (toast: Omit<ToastItem, 'id'>) => string;
    hideToast: (id: string) => void;
    clearToasts: () => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{
    position?: ToastPosition;
    children: React.ReactNode;
}> = ({ position = 'top-right', children }) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const showToast = (toast: Omit<ToastItem, 'id'>) => {
        const id = `toast-${Date.now()}`;
        const newToast = { ...toast, id };
        setToasts(prev => [...prev, newToast]);
        return id;
    };

    const hideToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const clearToasts = () => {
        setToasts([]);
    };

    return (
        <ToastContext.Provider value={{ showToast, hideToast, clearToasts }}>
            {children}
            <ToastContainer position={position}>
                {toasts.map(toast => (
                    <Toast key={toast.id} {...toast} onDismiss={hideToast} />
                ))}
            </ToastContainer>
        </ToastContext.Provider>
    );
};

// Hook to use toast
export const useToast = (): ToastContextType => {
    const context = React.useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export default Toast;