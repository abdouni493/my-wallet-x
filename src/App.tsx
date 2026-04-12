import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  History, 
  Calendar, 
  Settings as SettingsIcon,
  Plus,
  Bell,
  Search,
  Filter,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  TrendingDown,
  Wallet,
  LogOut,
  Menu,
  X,
  Trash2,
  Edit2,
  CheckCircle2,
  AlertCircle,
  Download,
  Moon,
  Sun,
  Globe,
  Briefcase,
  Laptop,
  Gift,
  Utensils,
  Car,
  Gamepad2,
  Home,
  HeartPulse,
  Languages,
  Star
} from 'lucide-react';

// ... (inside the component)

const IconMap: Record<string, any> = {
  Briefcase,
  Laptop,
  Gift,
  Utensils,
  Car,
  Gamepad2,
  Home,
  HeartPulse,
  Wallet
};

// ... (where icons are rendered)
const CategoryIcon = ({ iconName, size = 20 }: { iconName: string, size?: number }) => {
  const Icon = IconMap[iconName] || Wallet;
  return <Icon size={size} />;
};

const translations = {
  fr: {
    welcome: "Bonjour",
    overview: "Voici un aperçu de vos finances aujourd'hui.",
    balance: "Solde actuel",
    income: "Total Revenus",
    expenses: "Total Dépenses",
    add: "Ajouter",
    transactions: "Transactions",
    planning: "Planning",
    reports: "Rapports",
    settings: "Paramètres",
    dashboard: "Tableau de bord",
    recentTransactions: "Transactions Récentes",
    viewAll: "Voir tout",
    planningTitle: "Planning & Échéances",
    lowBalance: "Attention : Solde faible",
    lowBalanceDesc: "Votre solde est descendu en dessous de votre seuil de",
    loginTitle: "Bienvenue sur FinTrack",
    loginDesc: "Gérez vos finances en toute simplicité",
    quickAccess: "Accès Rapide",
    login: "Se connecter",
    email: "Email",
    password: "Mot de passe",
    language: "Langue",
    initialBalance: "Solde Initial",
    alertThreshold: "Seuil d'alerte",
    save: "Enregistrer",
    delete: "Supprimer",
    note: "Note",
    date: "Date",
    amount: "Montant",
    category: "Catégorie",
    type: "Type",
    bill: "Facture",
    reminder: "Rappel",
    personal: "Perso",
    upcoming: "À venir",
    completed: "Terminé",
    logout: "Déconnexion",
    proUser: "Utilisateur Pro",
    register: "Créer un compte",
    noAccount: "Pas encore de compte ?",
    haveAccount: "Déjà un compte ?",
    registerTitle: "Créer votre compte",
    registerDesc: "Commencez à gérer vos finances",
    searchPlaceholder: "Rechercher une transaction...",
    filters: "Filtres",
    thisMonth: "Ce mois",
    exportCsv: "Exporter CSV",
    resetAll: "Réinitialiser tout",
    saveData: "Sauvegarder les données",
    newTransaction: "Nouvelle Transaction",
    newReminder: "Nouveau Rappel",
    saveBtn: "Enregistrer",
    title: "Titre",
    addPlanning: "Ajouter au planning",
    incomeType: "Revenu",
    expenseType: "Dépense",
    activityWeekly: "Activité Hebdomadaire",
    expensesByCategory: "Dépenses par Catégorie",
    noTransactions: "Aucune transaction pour le moment.",
    noReminders: "Aucun rappel prévu.",
    generateReport: "Générer le rapport",
    startDate: "Date de début",
    endDate: "Date de fin",
    reportSummary: "Résumé du rapport",
    edit: "Modifier",
    allTransactions: "Toutes les transactions",
    reportDetails: "Détails du rapport",
    backup: "Sauvegarde & Restauration",
    backupBtn: "Sauvegarder (Export JSON)",
    restoreBtn: "Restaurer (Import JSON)",
    addCategory: "Ajouter une catégorie",
    categoryName: "Nom de la catégorie",
    profileInfo: "Informations du Profil",
    fullName: "Nom complet",
    username: "Nom d'utilisateur",
    updateProfile: "Mettre à jour le profil",
    appBranding: "Personnalisation de l'App",
    appName: "Nom de l'application",
    appLogo: "Logo (URL ou Emoji)",
    sidebarToggle: "Afficher/Masquer la barre latérale",
    totalBalance: "Solde Total",
    dailyAverage: "Moyenne Quotidienne",
    topCategory: "Top Catégorie",
    reportPeriod: "Période du rapport",
    allTime: "Tout le temps"
  },
  ar: {
    welcome: "مرحباً",
    overview: "إليك نظرة عامة على أمورك المالية اليوم.",
    balance: "الرصيد الحالي",
    income: "إجمالي الدخل",
    expenses: "إجمالي المصاريف",
    add: "إضافة",
    transactions: "المعاملات",
    planning: "التخطيط",
    reports: "التقارير",
    settings: "الإعدادات",
    dashboard: "لوحة التحكم",
    recentTransactions: "المعاملات الأخيرة",
    viewAll: "عرض الكل",
    planningTitle: "التخطيط والمواعيد",
    lowBalance: "تنبيه: رصيد منخفض",
    lowBalanceDesc: "رصيدك انخفض عن الحد المحدد بـ",
    loginTitle: "مرحباً بك في FinTrack",
    loginDesc: "إدارة أمورك المالية بكل سهولة",
    quickAccess: "دخول سريع",
    login: "تسجيل الدخول",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    language: "اللغة",
    initialBalance: "الرصيد الأولي",
    alertThreshold: "حد التنبيه",
    save: "حفظ",
    delete: "حذف",
    note: "ملاحظة",
    date: "التاريخ",
    amount: "المبلغ",
    category: "الفئة",
    type: "النوع",
    bill: "فاتورة",
    reminder: "تذكير",
    personal: "شخصي",
    upcoming: "قادم",
    completed: "مكتمل",
    logout: "تسجيل الخروج",
    proUser: "مستخدم محترف",
    register: "إنشاء حساب",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    registerTitle: "إنشاء حسابك",
    registerDesc: "ابدأ في إدارة أمورك المالية",
    searchPlaceholder: "البحث عن معاملة...",
    filters: "تصفية",
    thisMonth: "هذا الشهر",
    exportCsv: "تصدير CSV",
    resetAll: "إعادة ضبط الكل",
    saveData: "حفظ البيانات",
    newTransaction: "معاملة جديدة",
    newReminder: "تذكير جديد",
    saveBtn: "حفظ",
    title: "العنوان",
    addPlanning: "إضافة إلى التخطيط",
    incomeType: "دخل",
    expenseType: "مصاريف",
    activityWeekly: "النشاط الأسبوعي",
    expensesByCategory: "المصاريف حسب الفئة",
    noTransactions: "لا توجد معاملات حالياً.",
    noReminders: "لا توجد تذكيرات.",
    generateReport: "إنشاء التقرير",
    startDate: "تاريخ البدء",
    endDate: "تاريخ الانتهاء",
    reportSummary: "ملخص التقرير",
    edit: "تعديل",
    allTransactions: "جميع المعاملات",
    reportDetails: "تفاصيل التقرير",
    backup: "النسخ الاحتياطي والاستعادة",
    backupBtn: "نسخ احتياطي (تصدير JSON)",
    restoreBtn: "استعادة (استيراد JSON)",
    addCategory: "إضافة فئة",
    categoryName: "اسم الفئة",
    profileInfo: "معلومات الملف الشخصي",
    fullName: "الاسم الكامل",
    username: "اسم المستخدم",
    updateProfile: "تحديث الملف الشخصي",
    appBranding: "تخصيص التطبيق",
    appName: "اسم التطبيق",
    appLogo: "الشعار (رابط أو رمز تعبيري)",
    sidebarToggle: "إظهار/إخفاء الشريط الجانبي",
    totalBalance: "إجمالي الرصيد",
    dailyAverage: "المعدل اليومي",
    topCategory: "أعلى فئة",
    reportPeriod: "فترة التقرير",
    allTime: "كل الوقت"
  }
};

import { motion, AnimatePresence } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line
} from 'recharts';
import { format, subDays, startOfMonth, endOfMonth, isWithinInterval, parseISO, isSameMonth } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn, formatCurrency } from './lib/utils';
import { Transaction, Category, Appointment, UserSettings, TransactionType } from './types';
import { supabase } from './lib/supabase';
import { User } from '@supabase/supabase-js';

// --- Components ---

const Card = ({ children, className, title, subtitle, action }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn("bg-white rounded-3xl p-6 shadow-sm border border-slate-100", className)}
  >
    {(title || action) && (
      <div className="flex items-center justify-between mb-6">
        <div>
          {title && <h3 className="text-lg font-semibold text-slate-800">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
        {action}
      </div>
    )}
    {children}
  </motion.div>
);

const Button = ({ children, onClick, variant = 'primary', className, icon: Icon, fullWidth, size = 'md', disabled }: any) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 disabled:bg-blue-400",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-50",
    outline: "border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50",
    ghost: "text-slate-500 hover:bg-slate-100 disabled:opacity-50",
    danger: "bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50",
    success: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 disabled:opacity-50",
    gradient: "gradient-blue text-white shadow-lg shadow-blue-200 disabled:opacity-70"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <motion.button
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.96 } : {}}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium rounded-2xl transition-all duration-200",
        variants[variant as keyof typeof variants],
        sizes[size as keyof typeof sizes],
        fullWidth && "w-full",
        disabled && "cursor-not-allowed",
        className
      )}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : 18} />}
      {children}
    </motion.button>
  );
};

const Input = ({ label, icon: Icon, ...props }: any) => (
  <div className="space-y-1.5">
    {label && <label className="text-sm font-medium text-slate-600 ml-1">{label}</label>}
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <Icon size={18} />
        </div>
      )}
      <input
        {...props}
        className={cn(
          "w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all",
          Icon && "pl-11"
        )}
      />
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }: any) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
            <h2 className="text-xl font-bold text-slate-800">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Main App Component ---

export default function App() {
  const [data, setData] = useState<{
    transactions: Transaction[];
    categories: Category[];
    appointments: Appointment[];
    settings: UserSettings;
  } | null>(null);

  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isApptModalOpen, setIsApptModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [transactionFilter, setTransactionFilter] = useState<'all' | 'month'>('all');
  const [transactionTypeFilter, setTransactionTypeFilter] = useState<'all' | 'expense' | 'income'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [reportRange, setReportRange] = useState({
    start: format(startOfMonth(new Date()), 'yyyy-MM-dd'),
    end: format(endOfMonth(new Date()), 'yyyy-MM-dd')
  });

  const handleSupabaseError = (err: any) => {
    console.error("Supabase error:", err);
    if (err.code === 'PGRST303' || err.message?.includes('JWT expired')) {
      supabase.auth.signOut();
    } else {
      // Use console.error instead of alert for better UX in this environment
      console.error("Operation failed:", err.message);
    }
  };

  const [generatedReport, setGeneratedReport] = useState<any>(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', icon: 'Wallet', color: '#3b82f6' });

  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [profileForm, setProfileForm] = useState({ fullName: '', username: '', email: '', password: '' });
  const [brandingForm, setBrandingForm] = useState({ appName: '', appLogo: '' });

  const [newTransaction, setNewTransaction] = useState({
    amount: '',
    categoryId: '',
    type: 'expense' as TransactionType,
    date: format(new Date(), 'yyyy-MM-dd'),
    note: ''
  });

  const [newAppt, setNewAppt] = useState({
    title: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    amount: '',
    type: 'bill' as any
  });

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoggedIn(!!session?.user);
      if (session?.user) {
        fetchUserData(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoggedIn(!!session?.user);
      if (session?.user) {
        fetchUserData(session.user.id);
      } else {
        setData(null);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserData = async (userId: string) => {
    setIsLoading(true);
    try {
      // Fetch profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      // Fetch categories
      const { data: categories, error: catError } = await supabase
        .from('categories')
        .select('*')
        .or(`user_id.is.null,user_id.eq.${userId}`);
      
      if (catError) throw catError;

      // Fetch transactions
      const { data: transactions, error: transError } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: false });

      if (transError) throw transError;

      // Fetch appointments
      const { data: appointments, error: apptError } = await supabase
        .from('appointments')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: true });

      if (apptError) throw apptError;

      // Fetch settings
      const { data: settings, error: settingsError } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (settingsError && settingsError.code !== 'PGRST116') throw settingsError;

      const defaultSettings: UserSettings = {
        initialBalance: 0,
        lowBalanceThreshold: 1000,
        currency: 'DZD',
        language: 'fr',
        fullName: '',
        username: '',
        email: user?.email || '',
        appName: 'FinTrack',
        appLogo: 'Wallet'
      };

      const finalSettings: UserSettings = {
        initialBalance: settings?.initial_balance ?? defaultSettings.initialBalance,
        lowBalanceThreshold: settings?.low_balance_threshold ?? defaultSettings.lowBalanceThreshold,
        currency: settings?.currency ?? defaultSettings.currency,
        language: settings?.language ?? defaultSettings.language,
        fullName: settings?.full_name ?? profile?.full_name ?? defaultSettings.fullName,
        username: settings?.username ?? profile?.username ?? defaultSettings.username,
        email: settings?.email ?? defaultSettings.email,
        appName: settings?.app_name ?? defaultSettings.appName,
        appLogo: settings?.app_logo ?? defaultSettings.appLogo
      };

      setData({
        transactions: transactions || [],
        categories: categories || [],
        appointments: appointments || [],
        settings: finalSettings
      });

      setProfileForm({
        fullName: finalSettings.fullName || '',
        username: finalSettings.username || '',
        email: finalSettings.email || '',
        password: ''
      });
      setBrandingForm({
        appName: finalSettings.appName || 'FinTrack',
        appLogo: finalSettings.appLogo || 'Wallet'
      });

    } catch (err: any) {
      handleSupabaseError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuth = async () => {
    if (isAuthLoading) return;
    setIsAuthLoading(true);
    try {
      if (authMode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email: loginForm.email,
          password: loginForm.password,
        });
        if (error) throw error;
      } else {
        const { data: authData, error: signUpError } = await supabase.auth.signUp({
          email: loginForm.email,
          password: loginForm.password,
          options: {
            data: {
              full_name: profileForm.fullName,
              username: profileForm.username,
            }
          }
        });
        if (signUpError) throw signUpError;

        if (authData.user) {
          // Create profile and settings
          // We use upsert to handle cases where the user might already exist but not be confirmed
          const { error: profileError } = await supabase.from('profiles').upsert({
            id: authData.user.id,
            full_name: profileForm.fullName,
            username: profileForm.username,
          });
          
          if (profileError) console.error("Profile creation error:", profileError);

          const { error: settingsError } = await supabase.from('user_settings').upsert({
            user_id: authData.user.id,
            full_name: profileForm.fullName,
            username: profileForm.username,
            email: loginForm.email
          });

          if (settingsError) console.error("Settings creation error:", settingsError);

          if (!authData.session) {
            alert("Compte créé ! Veuillez vérifier votre email pour confirmer votre inscription.");
          }
        }
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleAddTransaction = async () => {
    if (!newTransaction.amount || !newTransaction.categoryId || !user) return;
    
    const amount = parseFloat(newTransaction.amount);
    
    try {
      if (editingTransaction) {
        const { error } = await supabase
          .from('transactions')
          .update({
            amount,
            category_id: newTransaction.categoryId,
            type: newTransaction.type,
            date: newTransaction.date,
            note: newTransaction.note
          })
          .eq('id', editingTransaction.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('transactions')
          .insert({
            user_id: user.id,
            amount,
            category_id: newTransaction.categoryId,
            type: newTransaction.type,
            date: newTransaction.date,
            note: newTransaction.note
          });
        
        if (error) throw error;
      }
      
      fetchUserData(user.id);
      setIsAddModalOpen(false);
      setEditingTransaction(null);
      setNewTransaction({
        amount: '',
        categoryId: '',
        type: 'expense',
        date: format(new Date(), 'yyyy-MM-dd'),
        note: ''
      });
    } catch (err: any) {
      handleSupabaseError(err);
    }
  };

  const deleteTransaction = async (id: string) => {
    if (!user) return;
    try {
      const { error } = await supabase.from('transactions').delete().eq('id', id);
      if (error) throw error;
      fetchUserData(user.id);
    } catch (err: any) {
      handleSupabaseError(err);
    }
  };

  const handleAddAppointment = async () => {
    if (!newAppt.title || !newAppt.date || !user) return;

    try {
      const { error } = await supabase.from('appointments').insert({
        user_id: user.id,
        title: newAppt.title,
        date: newAppt.date,
        amount: newAppt.amount ? parseFloat(newAppt.amount) : null,
        type: newAppt.type,
        completed: false
      });

      if (error) throw error;
      
      fetchUserData(user.id);
      setIsApptModalOpen(false);
      setNewAppt({
        title: '',
        date: format(new Date(), 'yyyy-MM-dd'),
        amount: '',
        type: 'bill'
      });
    } catch (err: any) {
      handleSupabaseError(err);
    }
  };

  const toggleAppt = async (id: string, currentStatus: boolean) => {
    if (!user) return;
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ completed: !currentStatus })
        .eq('id', id);
      
      if (error) throw error;
      fetchUserData(user.id);
    } catch (err: any) {
      handleSupabaseError(err);
    }
  };

  const deleteAppt = async (id: string) => {
    if (!user) return;
    try {
      const { error } = await supabase.from('appointments').delete().eq('id', id);
      if (error) throw error;
      fetchUserData(user.id);
    } catch (err: any) {
      handleSupabaseError(err);
    }
  };

  const updateSettings = async (newSettings: Partial<UserSettings>) => {
    if (!user) return;
    try {
      const mergedSettings = { ...data?.settings, ...newSettings };
      
      const { error } = await supabase
        .from('user_settings')
        .upsert({
          user_id: user.id,
          initial_balance: mergedSettings.initialBalance,
          low_balance_threshold: mergedSettings.lowBalanceThreshold,
          currency: mergedSettings.currency,
          language: mergedSettings.language,
          full_name: mergedSettings.fullName,
          username: mergedSettings.username,
          email: mergedSettings.email,
          app_name: mergedSettings.appName,
          app_logo: mergedSettings.appLogo
        });
      
      if (error) throw error;
      fetchUserData(user.id);
    } catch (err: any) {
      handleSupabaseError(err);
    }
  };

  const handleAddCategory = async () => {
    if (!user || !newCategory.name) return;
    try {
      const { error } = await supabase
        .from('categories')
        .insert({
          name: newCategory.name,
          icon: newCategory.icon,
          color: newCategory.color,
          type: newTransaction.type,
          user_id: user.id
        });
      
      if (error) throw error;
      fetchUserData(user.id);
      setIsAddingCategory(false);
      setNewCategory({ name: '', icon: 'Wallet', color: '#3b82f6' });
    } catch (err) {
      console.error("Error adding category", err);
    }
  };

  if (isLoading) return <div className="flex items-center justify-center h-screen">Chargement...</div>;

  const settings = data?.settings || {
    initialBalance: 0,
    lowBalanceThreshold: 1000,
    currency: 'DZD',
    language: 'fr',
    fullName: '',
    username: '',
    email: '',
    appName: 'FinTrack',
    appLogo: 'Wallet'
  };

  const transactions = data?.transactions || [];
  const categories = data?.categories || [];
  const appointments = data?.appointments || [];

  const t = (translations as any)[settings.language || 'fr'] || translations.fr;
  const isRTL = settings.language === 'ar';

  if (!isLoggedIn) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center bg-[#F8F9FB] p-4")}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100 mb-6">
              <Wallet size={32} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {authMode === 'login' ? t.loginTitle : t.registerTitle}
            </h1>
            <p className="text-slate-500">
              {authMode === 'login' ? t.loginDesc : t.registerDesc}
            </p>
          </div>

          <div className="space-y-5">
            {authMode === 'register' && (
              <>
                <Input 
                  label={t.fullName} 
                  placeholder="Youssef Abdouni" 
                  value={profileForm.fullName}
                  onChange={(e: any) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                />
                <Input 
                  label={t.username} 
                  placeholder="youssef_dz" 
                  value={profileForm.username}
                  onChange={(e: any) => setProfileForm({ ...profileForm, username: e.target.value })}
                />
              </>
            )}
            <Input 
              label={t.email} 
              type="email" 
              placeholder="youssef@example.com" 
              value={loginForm.email}
              onChange={(e: any) => setLoginForm({ ...loginForm, email: e.target.value })}
            />
            <Input 
              label={t.password} 
              type="password" 
              placeholder="••••••••" 
              value={loginForm.password}
              onChange={(e: any) => setLoginForm({ ...loginForm, password: e.target.value })}
            />
            
            <div className="pt-4 space-y-4">
              <Button 
                fullWidth 
                size="lg" 
                variant="gradient" 
                onClick={handleAuth}
                disabled={isAuthLoading}
              >
                {isAuthLoading ? "..." : (authMode === 'login' ? t.login : t.register)}
              </Button>
              
              <div className="text-center">
                <button 
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {authMode === 'login' ? t.noAccount : t.haveAccount}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const currentBalance = settings.initialBalance + totalIncome - totalExpenses;

  const startEditTransaction = (t_item: Transaction) => {
    setEditingTransaction(t_item);
    setNewTransaction({
      amount: t_item.amount.toString(),
      categoryId: t_item.categoryId,
      type: t_item.type,
      date: t_item.date,
      note: t_item.note || ''
    });
    setIsAddModalOpen(true);
  };

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.note?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         categories.find(c => c.id === t.categoryId)?.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = transactionFilter === 'all' || isSameMonth(parseISO(t.date), new Date());
    const matchesType = transactionTypeFilter === 'all' || t.type === transactionTypeFilter;
    return matchesSearch && matchesFilter && matchesType;
  });

  const generateReport = () => {
    const filtered = transactions.filter(t => 
      t.date >= reportRange.start && t.date <= reportRange.end
    );
    
    const income = filtered.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = filtered.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    
    // Detailed breakdown
    const categoryBreakdown = categories.map(cat => {
      const amount = filtered.filter(t => t.categoryId === cat.id).reduce((acc, t) => acc + t.amount, 0);
      return { id: cat.id, name: cat.name, value: amount, color: cat.color, type: cat.type, icon: cat.icon };
    }).filter(c => c.value > 0);

    const dailyData = filtered.reduce((acc: any, t) => {
      acc[t.date] = (acc[t.date] || 0) + (t.type === 'income' ? t.amount : -t.amount);
      return acc;
    }, {});

    const daysCount = Math.max(1, (new Date(reportRange.end).getTime() - new Date(reportRange.start).getTime()) / (1000 * 60 * 60 * 24));

    setGeneratedReport({
      transactions: filtered,
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
      categoryBreakdown,
      dailyAverage: (income - expense) / daysCount,
      topCategory: categoryBreakdown.sort((a, b) => b.value - a.value)[0]
    });
  };

  const handleBackup = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fintrack_backup_${format(new Date(), 'yyyy-MM-dd')}.json`;
    a.click();
  };

  const handleRestore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        // Restore logic: This would ideally be a complex merge or overwrite
        // For now, we update settings if they exist in the backup
        if (json.settings) {
          await updateSettings(json.settings);
        }
        // Transactions and appointments would need bulk inserts
        alert("Restauration partielle réussie (paramètres uniquement).");
      } catch (err) {
        alert("Fichier invalide");
      }
    };
    reader.readAsText(file);
  };

  // Chart Data
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const date = subDays(new Date(), 6 - i);
    const dayStr = format(date, 'yyyy-MM-dd');
    const dayName = format(date, 'EEE', { locale: fr });
    
    const dayIncome = transactions
      .filter(t => t.date === dayStr && t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
      
    const dayExpense = transactions
      .filter(t => t.date === dayStr && t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);

    return { name: dayName, income: dayIncome, expense: dayExpense };
  });

  const expenseByCategory = categories
    .filter(c => c.type === 'expense')
    .map(c => {
      const amount = transactions
        .filter(t => t.categoryId === c.id)
        .reduce((acc, t) => acc + t.amount, 0);
      return { name: c.name, value: amount, color: c.color };
    })
    .filter(c => c.value > 0);

  const navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'transactions', label: 'Transactions', icon: History },
    { id: 'planning', label: 'Planning', icon: Calendar },
    { id: 'reports', label: 'Rapports', icon: TrendingUp },
    { id: 'settings', label: 'Paramètres', icon: SettingsIcon },
  ];

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        "min-h-screen flex flex-col md:flex-row transition-colors duration-300 bg-slate-50 text-slate-900", 
        isRTL && "font-sans"
      )}
    >
      
      {/* Sidebar - Desktop */}
      <aside className={cn(
        "hidden md:flex flex-col transition-all duration-300 bg-white border-slate-100 p-6 relative",
        isSidebarCollapsed ? "w-24" : "w-72",
        isRTL ? "border-l" : "border-r"
      )}>
        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className={cn(
            "absolute top-10 w-6 h-6 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 shadow-sm z-50",
            isRTL ? "-left-3" : "-right-3"
          )}
        >
          {isSidebarCollapsed ? (isRTL ? <ChevronLeft size={14} /> : <ChevronRight size={14} />) : (isRTL ? <ChevronRight size={14} /> : <ChevronLeft size={14} />)}
        </button>

        <div className={cn("flex items-center gap-3 mb-10 px-2", isSidebarCollapsed && "justify-center")}>
          <div className="w-10 h-10 gradient-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
            {brandingForm.appLogo.length < 3 ? (
              <span className="text-xl">{brandingForm.appLogo}</span>
            ) : (
              <Wallet size={24} />
            )}
          </div>
          {!isSidebarCollapsed && (
            <h1 className="text-xl font-bold tracking-tight truncate">{brandingForm.appName}</h1>
          )}
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-medium",
                activeTab === item.id 
                  ? "bg-blue-50 text-blue-600 shadow-sm" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
                isSidebarCollapsed && "justify-center px-0"
              )}
            >
              <item.icon size={20} />
              {!isSidebarCollapsed && (t[item.id as keyof typeof t] || item.label)}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-50 space-y-4">
          <div className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-50/50 border border-blue-100/50",
            isSidebarCollapsed && "justify-center px-2"
          )}>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md">
              {profileForm.fullName.charAt(0).toUpperCase()}
            </div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{profileForm.fullName || 'admin'}</p>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Utilisateur Pro</p>
              </div>
            )}
          </div>

          <div className={cn("flex flex-col gap-2", isSidebarCollapsed && "items-center")}>
            <button 
              onClick={() => updateSettings({ language: settings.language === 'fr' ? 'ar' : 'fr' })}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-all w-full",
                isSidebarCollapsed && "justify-center px-0"
              )}
            >
              <Languages size={20} />
              {!isSidebarCollapsed && (
                <span className="text-sm font-medium">
                  {settings.language === 'fr' ? 'العربية' : 'Français'}
                </span>
              )}
            </button>
            <button 
              onClick={handleLogout}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all w-full",
                isSidebarCollapsed && "justify-center px-0"
              )}
            >
              <LogOut size={20} />
              {!isSidebarCollapsed && <span className="text-sm font-medium">{t.logout}</span>}
            </button>
          </div>
        </div>
      </aside>


      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center text-white">
            <Wallet size={18} />
          </div>
          <span className="font-bold text-lg">FinTrack</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-30 bg-white pt-20 p-6 md:hidden"
          >
            <nav className="space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-4 px-6 py-5 rounded-3xl text-lg font-semibold transition-all",
                    activeTab === item.id 
                      ? "bg-blue-600 text-white shadow-xl shadow-blue-200" 
                      : "text-slate-500 hover:bg-slate-50"
                  )}
                >
                  <item.icon size={24} />
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-6 py-5 rounded-3xl text-lg font-semibold text-red-500 hover:bg-red-50 transition-all"
              >
                <LogOut size={24} />
                {t.logout}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#F8F9FB] p-4 md:p-10 pb-24 md:pb-10">
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {t.welcome}, {profileForm.fullName || 'Utilisateur'} 👋
                </h2>
                <p className="text-slate-500">{t.overview}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-3 bg-white rounded-2xl border border-slate-100 text-slate-500 hover:text-blue-600 transition-all shadow-sm">
                  <Bell size={20} />
                </button>
                <Button onClick={() => setIsAddModalOpen(true)} variant="gradient" className="px-6" icon={Plus}>
                  {t.add}
                </Button>
              </div>
            </div>

            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-1 gradient-blue rounded-[2.5rem] p-8 text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
              >
                <div className={cn("absolute top-0 p-8 opacity-20", isRTL ? "left-0" : "right-0")}>
                  <Wallet size={120} />
                </div>
                <div className="relative z-10">
                  <p className="text-blue-100 font-medium mb-2 opacity-80">{t.balance}</p>
                  <h3 className="text-4xl font-bold mb-8 tracking-tight">
                    {formatCurrency(currentBalance, settings.currency)}
                  </h3>
                  <div className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-md w-fit px-3 py-1.5 rounded-full">
                    <TrendingUp size={16} className="text-emerald-300" />
                    <span className="text-blue-50">+2.4% ce mois</span>
                  </div>
                </div>
              </motion.div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className={cn("flex flex-col justify-between border-slate-100", isRTL ? "border-r-4 border-r-emerald-500" : "border-l-4 border-l-emerald-500")}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                      <ArrowUpRight size={24} />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+12%</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">{t.income}</p>
                    <h4 className="text-2xl font-bold text-slate-800">{formatCurrency(totalIncome, settings.currency)}</h4>
                  </div>
                </Card>

                <Card className={cn("flex flex-col justify-between border-slate-100", isRTL ? "border-r-4 border-r-red-500" : "border-l-4 border-l-red-500")}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                      <ArrowDownLeft size={24} />
                    </div>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg">-5%</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">{t.expenses}</p>
                    <h4 className="text-2xl font-bold text-slate-800">{formatCurrency(totalExpenses, settings.currency)}</h4>
                  </div>
                </Card>
              </div>
            </div>


            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card title={t.activityWeekly || "Activité Hebdomadaire"} className="lg:col-span-2">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                    <AreaChart data={last7Days}>
                      <defs>
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      />
                      <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                      <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorExpense)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card title={t.expensesByCategory || "Dépenses par Catégorie"}>
                <div className="h-[240px] w-full">
                  <ResponsiveContainer width="100%" height="100%" minHeight={240}>
                    <PieChart>
                      <Pie
                        data={expenseByCategory}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3 mt-4">
                  {expenseByCategory.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-slate-600">{item.name}</span>
                      </div>
                      <span className="font-semibold">{formatCurrency(item.value, settings.currency)}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Transactions & Planning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card 
                title={t.recentTransactions} 
                action={<Button variant="ghost" size="sm" onClick={() => setActiveTab('transactions')}>{t.viewAll}</Button>}
              >
                <div className="space-y-4">
                  {transactions.slice(0, 5).map((t_item) => {
                    const cat = categories.find(c => c.id === t_item.categoryId);
                    return (
                      <div key={t_item.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-all group">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                            style={{ backgroundColor: cat?.color || '#cbd5e1' }}
                          >
                            <CategoryIcon iconName={cat?.icon || 'Wallet'} />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">{cat?.name || 'Inconnu'}</p>
                            <p className="text-xs text-slate-400">{format(parseISO(t_item.date), 'dd MMMM yyyy', { locale: settings.language === 'ar' ? undefined : fr })}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={cn("font-bold", t_item.type === 'income' ? "text-emerald-600" : "text-slate-800")}>
                            {t_item.type === 'income' ? '+' : '-'}{formatCurrency(t_item.amount, settings.currency)}
                          </p>
                          {t_item.note && <p className="text-[10px] text-slate-400 truncate max-w-[100px]">{t_item.note}</p>}
                        </div>
                      </div>
                    );
                  })}
                  {transactions.length === 0 && (
                    <div className="text-center py-10 text-slate-400">Aucune transaction pour le moment.</div>
                  )}
                </div>
              </Card>

              <Card 
                title={t.planningTitle} 
                action={<Button variant="ghost" size="sm" onClick={() => setIsApptModalOpen(true)}>{t.add}</Button>}
              >
                <div className="space-y-4">
                  {appointments.slice(0, 5).map((a) => (
                    <div key={a.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl group">
                      <button 
                        onClick={() => toggleAppt(a.id, a.completed)}
                        className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                          a.completed ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300 bg-white"
                        )}
                      >
                        {a.completed && <CheckCircle2 size={14} />}
                      </button>
                      <div className="flex-1">
                        <p className={cn("font-semibold text-slate-800", a.completed && "line-through text-slate-400")}>
                          {a.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Calendar size={12} />
                          {format(parseISO(a.date), 'dd MMM', { locale: settings.language === 'ar' ? undefined : fr })}
                          {a.amount && <span className="text-blue-500 font-medium ml-2">{formatCurrency(a.amount)}</span>}
                        </div>
                      </div>
                      <div className={cn(
                        "px-2 py-1 rounded-lg text-[10px] font-bold uppercase",
                        a.type === 'bill' ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                      )}>
                        {t[a.type as keyof typeof t] || a.type}
                      </div>
                    </div>
                  ))}
                  {appointments.length === 0 && (
                    <div className="text-center py-10 text-slate-400">Aucun rappel prévu.</div>
                  )}
                </div>
              </Card>
            </div>

            {/* Smart Alerts */}
            {currentBalance < settings.lowBalanceThreshold && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-amber-50 border border-amber-100 p-4 rounded-3xl flex items-center gap-4 text-amber-800"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <p className="font-bold">{t.lowBalance}</p>
                  <p className="text-sm opacity-80">{t.lowBalanceDesc} {formatCurrency(settings.lowBalanceThreshold)}.</p>
                </div>
              </motion.div>
            )}

          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="max-w-4xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t.transactions}</h2>
              <div className="flex gap-3">
                <Button onClick={() => {
                  setEditingTransaction(null);
                  setNewTransaction({
                    amount: '',
                    categoryId: '',
                    type: 'expense',
                    date: format(new Date(), 'yyyy-MM-dd'),
                    note: ''
                  });
                  setIsAddModalOpen(true);
                }} variant="gradient" icon={Plus}>{t.add}</Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder={t.searchPlaceholder} 
                  icon={Search} 
                  value={searchQuery}
                  onChange={(e: any) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={transactionFilter === 'all' ? 'primary' : 'outline'} 
                  icon={Filter}
                  onClick={() => setTransactionFilter('all')}
                >
                  {t.allTime}
                </Button>
                <Button 
                  variant={transactionFilter === 'month' ? 'primary' : 'outline'}
                  onClick={() => setTransactionFilter('month')}
                >
                  {t.thisMonth}
                </Button>
              </div>
              <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
                <button 
                  onClick={() => setTransactionTypeFilter('all')}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                    transactionTypeFilter === 'all' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  Tous
                </button>
                <button 
                  onClick={() => setTransactionTypeFilter('expense')}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                    transactionTypeFilter === 'expense' ? "bg-white text-red-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {t.expenseType}
                </button>
                <button 
                  onClick={() => setTransactionTypeFilter('income')}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                    transactionTypeFilter === 'income' ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {t.incomeType}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredTransactions.map((t_item) => {
                const cat = categories.find(c => c.id === t_item.category_id || c.id === t_item.categoryId);
                return (
                  <Card key={t_item.id} className="p-4 hover:shadow-md transition-all group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                          style={{ backgroundColor: cat?.color || '#cbd5e1' }}
                        >
                          <CategoryIcon iconName={cat?.icon || 'Wallet'} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-lg">{cat?.name || 'Inconnu'}</p>
                          <p className="text-sm text-slate-400">{format(parseISO(t_item.date), 'dd MMMM yyyy', { locale: settings.language === 'ar' ? undefined : fr })}</p>
                          {t_item.note && <p className="text-xs text-slate-500 mt-1">{t_item.note}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className={cn("font-bold text-xl", t_item.type === 'income' ? "text-emerald-600" : "text-slate-800")}>
                            {t_item.type === 'income' ? '+' : '-'}{formatCurrency(t_item.amount, settings.currency)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                          <button 
                            onClick={() => startEditTransaction(t_item)}
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button 
                            onClick={() => deleteTransaction(t_item.id)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
              {filteredTransactions.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-4">
                    <History size={32} />
                  </div>
                  <p className="text-slate-400 font-medium">{t.noTransactions}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="max-w-5xl mx-auto space-y-8 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{t.reports}</h2>
                <p className="text-slate-500 mt-1">Analysez vos performances financières sur une période donnée.</p>
              </div>
              <div className="flex items-center gap-3 p-1 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 px-4 py-2">
                  <Calendar size={18} className="text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">
                    {format(parseISO(reportRange.start), 'dd MMM')} - {format(parseISO(reportRange.end), 'dd MMM')}
                  </span>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white border-none shadow-xl shadow-slate-200/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                <Input 
                  label={t.startDate} 
                  type="date" 
                  value={reportRange.start}
                  onChange={(e: any) => setReportRange({ ...reportRange, start: e.target.value })}
                />
                <Input 
                  label={t.endDate} 
                  type="date" 
                  value={reportRange.end}
                  onChange={(e: any) => setReportRange({ ...reportRange, end: e.target.value })}
                />
                <Button onClick={generateReport} variant="gradient" fullWidth size="lg" className="h-[52px] rounded-2xl shadow-lg shadow-blue-200">
                  {t.generateReport}
                </Button>
              </div>
            </Card>

            {generatedReport && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                        <TrendingUp size={24} />
                      </div>
                      <p className="text-slate-500 text-sm font-medium mb-1">{t.totalIncome}</p>
                      <h3 className="text-3xl font-bold text-slate-900">{formatCurrency(generatedReport.totalIncome, settings.currency)}</h3>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-4">
                        <TrendingDown size={24} />
                      </div>
                      <p className="text-slate-500 text-sm font-medium mb-1">{t.totalExpense}</p>
                      <h3 className="text-3xl font-bold text-slate-900">{formatCurrency(generatedReport.totalExpense, settings.currency)}</h3>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] shadow-xl shadow-blue-200 border border-blue-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4">
                        <Wallet size={24} />
                      </div>
                      <p className="text-blue-100 text-sm font-medium mb-1">{t.totalBalance}</p>
                      <h3 className="text-3xl font-bold text-white">{formatCurrency(generatedReport.balance, settings.currency)}</h3>
                    </div>
                  </div>
                </div>

                {/* Category Breakdown Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <div className="w-2 h-8 bg-red-500 rounded-full" />
                        {t.expensesByCategory}
                      </h3>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Détails</span>
                    </div>
                    <div className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 space-y-4">
                      {generatedReport.categoryBreakdown
                        .filter((c: any) => c.type === 'expense')
                        .sort((a: any, b: any) => b.value - a.value)
                        .map((cat: any) => (
                          <div key={cat.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-3xl transition-all group">
                            <div className="flex items-center gap-4">
                              <div 
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                                style={{ backgroundColor: cat.color }}
                              >
                                <CategoryIcon iconName={cat.icon} size={20} />
                              </div>
                              <div>
                                <p className="font-bold text-slate-800">{cat.name}</p>
                                <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                  <div 
                                    className="h-full rounded-full" 
                                    style={{ 
                                      backgroundColor: cat.color,
                                      width: `${(cat.value / generatedReport.totalExpense) * 100}%` 
                                    }} 
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-slate-900">
                                {formatCurrency(cat.value, settings.currency)}
                              </p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">
                                {Math.round((cat.value / generatedReport.totalExpense) * 100)}%
                              </p>
                            </div>
                          </div>
                        ))}
                      {generatedReport.categoryBreakdown.filter((c: any) => c.type === 'expense').length === 0 && (
                        <div className="text-center py-12">
                          <p className="text-slate-400 font-medium">Aucune dépense enregistrée.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                        Revenus par Catégorie
                      </h3>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Détails</span>
                    </div>
                    <div className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 space-y-4">
                      {generatedReport.categoryBreakdown
                        .filter((c: any) => c.type === 'income')
                        .sort((a: any, b: any) => b.value - a.value)
                        .map((cat: any) => (
                          <div key={cat.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-3xl transition-all group">
                            <div className="flex items-center gap-4">
                              <div 
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                                style={{ backgroundColor: cat.color }}
                              >
                                <CategoryIcon iconName={cat.icon} size={20} />
                              </div>
                              <div>
                                <p className="font-bold text-slate-800">{cat.name}</p>
                                <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                  <div 
                                    className="h-full rounded-full" 
                                    style={{ 
                                      backgroundColor: cat.color,
                                      width: `${(cat.value / generatedReport.totalIncome) * 100}%` 
                                    }} 
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-emerald-600">
                                {formatCurrency(cat.value, settings.currency)}
                              </p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">
                                {Math.round((cat.value / generatedReport.totalIncome) * 100)}%
                              </p>
                            </div>
                          </div>
                        ))}
                      {generatedReport.categoryBreakdown.filter((c: any) => c.type === 'income').length === 0 && (
                        <div className="text-center py-12">
                          <p className="text-slate-400 font-medium">Aucun revenu enregistré.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Visual Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 px-2">Répartition des Dépenses</h3>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 h-[400px]">
                      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                        <PieChart>
                          <Pie
                            data={generatedReport.categoryBreakdown.filter((c: any) => c.type === 'expense' && c.value > 0)}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={8}
                            dataKey="value"
                            stroke="none"
                          >
                            {generatedReport.categoryBreakdown.filter((c: any) => c.type === 'expense' && c.value > 0).map((entry: any, index: number) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 px-2">Statistiques Clés</h3>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 space-y-6">
                      <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                            <TrendingUp size={20} />
                          </div>
                          <p className="font-bold text-blue-900">{t.dailyAverage}</p>
                        </div>
                        <p className="text-3xl font-black text-blue-600">
                          {formatCurrency(generatedReport.dailyAverage, settings.currency)}
                        </p>
                        <p className="text-xs text-blue-400 mt-2 font-medium">Moyenne calculée sur la période</p>
                      </div>

                      <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white">
                            <Star size={20} />
                          </div>
                          <p className="font-bold text-amber-900">{t.topCategory}</p>
                        </div>
                        <p className="text-2xl font-black text-amber-600 truncate">
                          {generatedReport.topCategory?.name || '-'}
                        </p>
                        <p className="text-xs text-amber-400 mt-2 font-medium">Catégorie avec le plus de dépenses</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Transactions List */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="text-xl font-bold text-slate-800">{t.reportDetails}</h3>
                    <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold">
                      {generatedReport.transactions.length} Transactions
                    </span>
                  </div>
                  <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 overflow-hidden">
                    <div className="divide-y divide-slate-50">
                      {generatedReport.transactions.map((t_item: any) => {
                        const cat = categories.find(c => c.id === t_item.category_id || c.id === t_item.categoryId);
                        return (
                          <div key={t_item.id} className="flex items-center justify-between p-6 hover:bg-slate-50 transition-all group">
                            <div className="flex items-center gap-4">
                              <div 
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                                style={{ backgroundColor: cat?.color || '#cbd5e1' }}
                              >
                                <CategoryIcon iconName={cat?.icon || 'Wallet'} size={20} />
                              </div>
                              <div>
                                <p className="font-bold text-slate-800">{cat?.name || 'Inconnu'}</p>
                                <p className="text-xs text-slate-400 font-medium">{format(parseISO(t_item.date), 'dd MMMM yyyy', { locale: settings.language === 'ar' ? undefined : fr })}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={cn("font-bold text-lg", t_item.type === 'income' ? "text-emerald-600" : "text-slate-900")}>
                                {t_item.type === 'income' ? '+' : '-'}{formatCurrency(t_item.amount, settings.currency)}
                              </p>
                              {t_item.note && <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{t_item.note}</p>}
                            </div>
                          </div>
                        );
                      })}
                      {generatedReport.transactions.length === 0 && (
                        <p className="text-center py-10 text-slate-400">{t.noTransactions}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Planning Tab */}
        {activeTab === 'planning' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t.planningTitle}</h2>
              <Button onClick={() => setIsApptModalOpen(true)} variant="gradient" icon={Plus}>{t.newReminder}</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title={t.upcoming}>
                <div className="space-y-4">
                  {appointments.filter(a => !a.completed).map(a => (
                    <div key={a.id} className="p-4 bg-slate-50 rounded-3xl flex items-center gap-4 group">
                      <button onClick={() => toggleAppt(a.id, a.completed)} className="w-6 h-6 rounded-full border-2 border-slate-300 bg-white" />
                      <div className="flex-1">
                        <p className="font-bold">{a.title}</p>
                        <p className="text-xs text-slate-400">{format(parseISO(a.date), 'EEEE dd MMMM', { locale: settings.language === 'ar' ? undefined : fr })}</p>
                      </div>
                      {a.amount && <span className="font-bold text-blue-600">{formatCurrency(a.amount, settings.currency)}</span>}
                      <button onClick={() => deleteAppt(a.id)} className="p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title={t.completed} className="opacity-60">
                <div className="space-y-4">
                  {appointments.filter(a => a.completed).map(a => (
                    <div key={a.id} className="p-4 bg-slate-50 rounded-3xl flex items-center gap-4 group">
                      <button onClick={() => toggleAppt(a.id, a.completed)} className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                        <CheckCircle2 size={14} />
                      </button>
                      <div className="flex-1">
                        <p className="font-bold line-through">{a.title}</p>
                        <p className="text-xs text-slate-400">{format(parseISO(a.date), 'dd MMM', { locale: settings.language === 'ar' ? undefined : fr })}</p>
                      </div>
                      <button onClick={() => deleteAppt(a.id)} className="p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto space-y-8 pb-20">
            <h2 className="text-2xl font-bold">{t.settings}</h2>
            
            <Card title={t.profileInfo}>
              <div className="space-y-4">
                <Input 
                  label={t.fullName} 
                  value={profileForm.fullName}
                  onChange={(e: any) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                />
                <Input 
                  label={t.username} 
                  value={profileForm.username}
                  onChange={(e: any) => setProfileForm({ ...profileForm, username: e.target.value })}
                />
                <Input 
                  label={t.email} 
                  value={profileForm.email}
                  onChange={(e: any) => setProfileForm({ ...profileForm, email: e.target.value })}
                />
                <Input 
                  label={t.password} 
                  type="password"
                  value={profileForm.password}
                  onChange={(e: any) => setProfileForm({ ...profileForm, password: e.target.value })}
                />
                <Button 
                  onClick={() => updateSettings(profileForm)}
                  fullWidth
                >
                  {t.updateProfile}
                </Button>
              </div>
            </Card>

            <Card title={t.appBranding}>
              <div className="space-y-4">
                <Input 
                  label={t.appName} 
                  value={brandingForm.appName}
                  onChange={(e: any) => setBrandingForm({ ...brandingForm, appName: e.target.value })}
                />
                <Input 
                  label={t.appLogo} 
                  placeholder="Ex: 💰 ou URL"
                  value={brandingForm.appLogo}
                  onChange={(e: any) => setBrandingForm({ ...brandingForm, appLogo: e.target.value })}
                />
                <Button 
                  onClick={() => updateSettings(brandingForm)}
                  fullWidth
                >
                  {t.save}
                </Button>
              </div>
            </Card>

            <Card title="Préférences">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="font-bold">{t.language}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant={settings.language === 'fr' ? 'primary' : 'outline'} 
                      size="sm"
                      onClick={() => updateSettings({ language: 'fr' })}
                    >
                      FR
                    </Button>
                    <Button 
                      variant={settings.language === 'ar' ? 'primary' : 'outline'} 
                      size="sm"
                      onClick={() => updateSettings({ language: 'ar' })}
                    >
                      AR
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Finances">
              <div className="space-y-4">
                <Input 
                  label={t.initialBalance} 
                  type="number" 
                  value={settings.initialBalance}
                  onChange={(e: any) => updateSettings({ initialBalance: parseFloat(e.target.value) || 0 })}
                />
                <Input 
                  label={t.alertThreshold} 
                  type="number"
                  value={settings.lowBalanceThreshold}
                  onChange={(e: any) => updateSettings({ lowBalanceThreshold: parseFloat(e.target.value) || 0 })}
                />
              </div>
            </Card>

            <Card title={t.backup}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" icon={Download} onClick={handleBackup} fullWidth>
                  {t.backupBtn}
                </Button>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".json" 
                    onChange={handleRestore}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />
                  <Button variant="outline" icon={Plus} fullWidth>
                    {t.restoreBtn}
                  </Button>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button variant="danger" fullWidth icon={Trash2}>{t.resetAll}</Button>
            </div>
          </div>
        )}


      </main>

      {/* Floating Action Button - Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAddModalOpen(true)}
          className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-400"
        >
          <Plus size={32} />
        </motion.button>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingTransaction(null);
        }} 
        title={editingTransaction ? t.edit : t.newTransaction}
      >
        <div className="space-y-6">
          <div className="flex p-1 bg-slate-100 rounded-2xl">
            <button 
              onClick={() => setNewTransaction({...newTransaction, type: 'expense'})}
              className={cn(
                "flex-1 py-2 rounded-xl text-sm font-bold transition-all",
                newTransaction.type === 'expense' ? "bg-white text-red-600 shadow-sm" : "text-slate-500"
              )}
            >
              {t.expenseType}
            </button>
            <button 
              onClick={() => setNewTransaction({...newTransaction, type: 'income'})}
              className={cn(
                "flex-1 py-2 rounded-xl text-sm font-bold transition-all",
                newTransaction.type === 'income' ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500"
              )}
            >
              {t.incomeType}
            </button>
          </div>

          <Input 
            label={t.amount} 
            type="number" 
            placeholder="0.00" 
            value={newTransaction.amount}
            onChange={(e: any) => setNewTransaction({...newTransaction, amount: e.target.value})}
          />

          <div className="space-y-1.5">
            <div className="flex items-center justify-between ml-1">
              <label className="text-sm font-medium text-slate-600">{t.category}</label>
              <button 
                onClick={() => setIsAddingCategory(!isAddingCategory)}
                className="text-xs text-blue-600 font-bold hover:underline"
              >
                {isAddingCategory ? "Annuler" : t.addCategory}
              </button>
            </div>

            {isAddingCategory ? (
              <div className="p-4 bg-slate-50 rounded-2xl space-y-4 border border-blue-100">
                <Input 
                  label={t.categoryName}
                  placeholder="Ex: Sport, Netflix..."
                  value={newCategory.name}
                  onChange={(e: any) => setNewCategory({...newCategory, name: e.target.value})}
                />
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-xs font-medium text-slate-500 mb-1 block">Couleur</label>
                    <input 
                      type="color" 
                      className="w-full h-10 rounded-xl cursor-pointer border-none"
                      value={newCategory.color}
                      onChange={(e) => setNewCategory({...newCategory, color: e.target.value})}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-medium text-slate-500 mb-1 block">Icon</label>
                    <select 
                      className="w-full h-10 rounded-xl bg-white border border-slate-200 px-3 text-sm"
                      value={newCategory.icon}
                      onChange={(e) => setNewCategory({...newCategory, icon: e.target.value})}
                    >
                      {Object.keys(IconMap).map(icon => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button onClick={handleAddCategory} fullWidth size="sm">
                  {t.saveBtn}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                {categories.filter(c => c.type === newTransaction.type).map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setNewTransaction({...newTransaction, categoryId: cat.id})}
                    className={cn(
                      "flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all",
                      newTransaction.categoryId === cat.id 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-transparent bg-slate-50 hover:bg-slate-100"
                    )}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: cat.color }}
                    >
                      <CategoryIcon iconName={cat.icon} size={16} />
                    </div>
                    <span className="text-[10px] font-medium text-slate-600 truncate w-full text-center">{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Input 
            label={t.date} 
            type="date" 
            value={newTransaction.date}
            onChange={(e: any) => setNewTransaction({...newTransaction, date: e.target.value})}
          />

          <Input 
            label={t.note} 
            placeholder="Ex: Courses Carrefour" 
            value={newTransaction.note}
            onChange={(e: any) => setNewTransaction({...newTransaction, note: e.target.value})}
          />

          <Button onClick={handleAddTransaction} fullWidth size="lg" variant="gradient">
            {t.saveBtn}
          </Button>
        </div>
      </Modal>

      <Modal 
        isOpen={isApptModalOpen} 
        onClose={() => setIsApptModalOpen(false)} 
        title={t.newReminder}
      >
        <div className="space-y-6">
          <Input 
            label={t.title} 
            placeholder="Ex: Loyer, Facture EDF..." 
            value={newAppt.title}
            onChange={(e: any) => setNewAppt({...newAppt, title: e.target.value})}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input 
              label={t.date} 
              type="date" 
              value={newAppt.date}
              onChange={(e: any) => setNewAppt({...newAppt, date: e.target.value})}
            />
            <Input 
              label={t.amount} 
              type="number" 
              placeholder="0.00" 
              value={newAppt.amount}
              onChange={(e: any) => setNewAppt({...newAppt, amount: e.target.value})}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-600 ml-1">{t.type}</label>
            <div className="flex gap-2">
              {['bill', 'reminder', 'personal'].map(type => (
                <button
                  key={type}
                  onClick={() => setNewAppt({...newAppt, type: type as any})}
                  className={cn(
                    "flex-1 py-2 rounded-xl text-xs font-bold capitalize transition-all",
                    newAppt.type === type ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                  )}
                >
                  {t[type as keyof typeof t] || type}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={handleAddAppointment} fullWidth size="lg" variant="gradient">
            {t.addPlanning}
          </Button>
        </div>
      </Modal>

    </div>
  );
}
