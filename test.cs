class Helpers
{
    private static Helpers instance = null;
    private Helpers() { }
    public static Helpers Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new Helpers();
            }
            return instance;
        }
    }

    // diff array
    public int[] Diff(int[] a, int[] b)
    {
        int[] result = new int[a.Length];
        for (int i = 0; i < a.Length; i++)
        {
            result[i] = a[i] - b[i];
        }
        return result;
    }
}
